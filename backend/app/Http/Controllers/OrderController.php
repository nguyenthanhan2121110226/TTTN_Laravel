<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\Mail\ResponseStatusOrderConfirm;
use App\Mail\SneakersMail;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\OrderStatusHistory;
use App\Models\Product;
use App\Models\PurchasedProduct;
use App\Models\User;
use App\Models\VoucherUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'create', 'getUserOrder']]);
    }

    public function index(Request $request)
    {
        $orders = Order::query();
        $useridParam = $request->input("userid");
        if (isset($useridParam)) {
            $orders->where("user_id", "=", $useridParam);
        }
        $statusParam = $request->input("status");
        if (isset($statusParam)) {
            $orders->where("status", "=", $statusParam);
        }
        $paymentMethodParam = $request->input("paymentMethod");
        if (isset($paymentMethodParam)) {
            $orders->where("payment_method", "=", $paymentMethodParam);
        }
        $paymentStatusParams = $request->input("paymentStatus");
        if (isset($paymentStatusParams)) {
            $orders->where("payment_status", "=", $paymentStatusParams);
        }
        $searchParam = $request->input("search");
        if (isset($searchParam)) {
            $orders->where("reciver_name", "like", "%" . $searchParam . "%");
        }
        $priceParam = $request->input("price");
        if (isset($priceParam)) {
            $arrayPrice = explode("to", $priceParam);
            $orders->whereBetWeen("amount", $arrayPrice);
        }
        $orders = HandleDataDefault::sort($orders, $request->input("sortBy"));
        $orders = HandleDataDefault::limit($orders, $request->input("limit"));
        return response()->json([
            "data" => $orders,
            "message" => "get success"
        ], 200);
    }

    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $order = new Order();
        $order->user_id = $request->userId;
        $order->reciver_email = $request->userEmail;
        $order->reciver_name = $request->reciverName;
        $order->reciver_phone = $request->reciverPhone;
        $order->address = $request->address;
        $order->amount = $request->amount;
        $order->voucher = $request->voucher;
        $order->shipping = $request->shipping;
        $order->payment_method = $request->paymentMethod;
        $order->payment_status = $request->paymentStatus;
        $order->note = $request->note;
        $order->status = 3;
        if ($order->save()) {
            $products = $request->cart;
            foreach ($products  as $product) {
                $orderDetail = new OrderDetail();
                $orderDetail->order_id = $order->id;
                $orderDetail->product_id = $product["id"];
                $orderDetail->product_name = $product["name"];
                $orderDetail->product_slug = $product["slug"];
                $orderDetail->product_image = $product["color"]["image"];
                $orderDetail->product_size = $product["size"]["size"];
                $orderDetail->product_color = $product["color"]["value"];
                $orderDetail->product_price = $product["price"];
                $orderDetail->product_quantity = $product["quantityCart"];
                if ($orderDetail->save()) {
                    for ($i = 0; $i < $product["quantityCart"]; $i++) {
                        //san pham đã mua
                        $purchasedProduct = new PurchasedProduct();
                        $purchasedProduct->product_id = $orderDetail->product_id;
                        $purchasedProduct->save();

                        // giảm số lượng sản phẩm
                        $product = Product::find($purchasedProduct->product_id);
                        $product->quantity = $product->quantity === 0 ? 0 : $product->quantity - 1;
                        $product->save();
                    }
                }
            }

            //giảm voucher
            if ($request->voucherId) {
                $voucherUser = VoucherUser::where([["voucher_id", "=", $request->voucherId], ["user_id", "=", $request->userId]])->first();
                if ($voucherUser) {
                    if ($voucherUser->quantity === 1) {
                        $voucherUser->delete();
                    } else {
                        $voucherUser->quantity = $voucherUser->quantity - 1;
                        $voucherUser->save();
                    }
                }
            }

            //lưu lịch sử
            $historyOrder = new OrderStatusHistory();
            $historyOrder->order_id = $order->id;
            $historyOrder->status = 3;
            $historyOrder->save();

            $userBought = User::find($order->user_id);

            $details = [
                "fullname" => $userBought->fullname,
                "reciverName" => $order->reciver_name,
                "phone" => $order->reciver_phone,
                "email" => $order->reciver_email,
                "address" => $order->address,
                "paymentMethod" => $order->payment_method,
                "orderId" => $order->id,
                "note" => $order->note,
                "createdAt" => $order->created_at,
                "amount" => $order->amount,
                "shipping" => $order->shipping,
                "voucher" => $order->voucher,
                "details" => $request->cart
            ];

            Mail::to($order->reciver_email)->send(new SneakersMail($details));
            if (Mail::failures()) {
                return response()->json([
                    "message" => "store success but mail fail",
                    "errCode" => 1,
                ], 201);
            } else {
                return response()->json([
                    "message" => "store and mail success",
                    "errCode" => 0,
                ], 201);
            }
        }
    }


    public function status(Request $request, $id)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $order = Order::find($id);
        $order->status = $request->status;
        if ($order->save()) {
            $historyOrder = new OrderStatusHistory();
            $historyOrder->order_id = $order->id;
            $historyOrder->status = $order->status;
            $historyOrder->reason = $request->reason;
            $historyOrder->save();

            $userBought = User::find($order->user_id);

            $orderStatus = "";
            if($order->status == 3){
                $orderStatus = "Đang xử lý";
            }
            if($order->status == 2){
                $orderStatus = "Đang vận chuyển";
            }
            if($order->status == 1){
                $orderStatus = "Đã giao hàng";
            }
            if($order->status == 4){
                $orderStatus = "Đã bị hủy";
            }

            $details = [
                "fullname" => $userBought->fullname,
                "reciverName" => $order->reciver_name,
                "phone" => $order->reciver_phone,
                "email" => $order->reciver_email,
                "address" => $order->address,
                "paymentMethod" => $order->payment_method,
                "orderId" => $order->id,
                "note" => $order->note,
                "createdAt" => $order->created_at,
                "amount" => $order->amount,
                "shipping" => $order->shipping,
                "voucher" => $order->voucher,
                "status_payment_text" => $orderStatus,
                "createdAt_stt" => $historyOrder->created_at,
                "reason" => $request->reason
            ];

            Mail::to($order->reciver_email)->send(new ResponseStatusOrderConfirm($details));
            if (Mail::failures()) {
                return response()->json([
                    "message" => "Change success but mail fail",
                    "errCode" => 1,
                ], 201);
            } else {
                return response()->json([
                    "message" => "Change and mail success",
                    "errCode" => 0,
                ], 201);
            }
        }
    }

    public function paymentStatus(Request $request, $id)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $order = Order::find($id);
        $order->payment_status = $request->status;
        $order->save();
        return response()->json([
            "message" => "change status success"
        ], 200);
    }

    public function getUserOrder()
    {
        $users = User::join("orders", "orders.user_id", "users.id")
            ->groupBy("users.id")
            ->select("users.*")
            ->selectRaw("sum(orders.amount) as amount")
            ->selectRaw("count(orders.id) as quantity")
            ->orderBy("quantity", "desc")
            ->limit(3)
            ->get();

        $totalOrder = Order::sum("amount");
        foreach ($users as $user) {
            $percent = $user->amount * 100 / $totalOrder;
            $user->percent = $percent;
        }
        return response()->json([
            "data" => $users,
            "message" => "success"
        ], 200);
    }
}

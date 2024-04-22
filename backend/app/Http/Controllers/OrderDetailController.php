<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    public function index($orderId)
    {
        $order = Order::find($orderId);
        $orderDetails = OrderDetail::where("order_id", "=", $order->id)->orderBy("created_at", "desc")->get();
        $order->products = $orderDetails;
        return response()->json([
            "message" => "get order success",
            "data" => $order
        ], 200);
    }
}

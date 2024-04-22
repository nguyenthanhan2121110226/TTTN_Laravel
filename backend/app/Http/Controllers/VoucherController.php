<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\Models\User;
use App\Models\Voucher;
use App\Models\VoucherUser;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'getUser']]);
    }

    public function index(Request $request)
    {
        $vouchers = Voucher::query();
        $activeParams = $request->input("status");
        if (isset($activeParams)) {
            $vouchers->where("status", "=", $activeParams);
        }
        $vouchers = HandleDataDefault::sort($vouchers, $request->input("sortBy"));
        $vouchers = HandleDataDefault::search($vouchers, $request->input("q"));
        $vouchers = HandleDataDefault::limit($vouchers, $request->input("limit"));

        return response()->json([
            "message" => "get review success",
            "data" => $vouchers
        ], 200);
    }

    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $voucher = new Voucher();
        $voucher->name = $request->name;
        $voucher->cash_milestones = $request->cashMilestones;
        $voucher->price = $request->price;
        $voucher->quantity = $request->quantity;
        $voucher->status = $request->status;
        $voucher->date_milestones = $request->dateMilestones;
        if ($voucher->save()) {
            $users = User::where([["status", '=', 1], ["role", "=", 0]])->get();
            foreach ($users as $user) {
                $voucherUser = new VoucherUser();
                $voucherUser->voucher_id = $voucher->id;
                $voucherUser->user_id = $user->id;
                $voucherUser->quantity = $request->quantity;
                $voucherUser->save();
            }
            return response()->json([
                "message" => "create voucher success"
            ], 200);
        }
    }

    public function getUser(Request $request)
    {
        $voucherUsers = VoucherUser::query();
        $userIdParam = $request->input("userid");
        if ($userIdParam) {
            $voucherUsers->where("voucher_users.user_id", "=", $userIdParam);
        }
        
        $voucherUsers->join("users", "users.id", "voucher_users.user_id");
        $voucherUsers->join("vouchers", "vouchers.id", "voucher_users.voucher_id");
        $voucherUsers->select("users.id as user_id", "users.fullname as user_name", "users.email as user_email", "users.avatar as user_avatar", "users.phone as user_phone", "vouchers.*", "voucher_users.quantity as quantity");
        $voucherUsers = HandleDataDefault::sort($voucherUsers, $request->input("sortBy"));
        $voucherUsers = HandleDataDefault::search($voucherUsers, $request->input("q"));
        $voucherUsers = HandleDataDefault::limit($voucherUsers, $request->input("limit"));

        return response()->json([
            "message" => "get review success",
            "data" => $voucherUsers
        ], 200);
    }
}

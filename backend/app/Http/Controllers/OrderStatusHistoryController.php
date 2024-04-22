<?php

namespace App\Http\Controllers;

use App\Models\OrderStatusHistory;
use Illuminate\Http\Request;

class OrderStatusHistoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index($orderId)
    {
        $orderStatusHistories = OrderStatusHistory::where("order_id", "=", $orderId)
            ->orderBy("created_at", "desc")
            ->get();

            return response()->json([
                "message" => "get success",
                "data" => $orderStatusHistories
            ], 200);
    }
}

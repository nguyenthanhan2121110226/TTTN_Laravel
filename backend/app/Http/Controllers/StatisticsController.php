<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\PurchasedProduct;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function user()
    {
        $users1 = User::whereDate("created_at", "=", Carbon::now()->subDays(0))->count();
        $users2 = User::whereDate("created_at", "=", Carbon::now()->subDays(1))->count();
        $users3 = User::whereDate("created_at", "=", Carbon::now()->subDays(2))->count();
        $users4 = User::whereDate("created_at", "=", Carbon::now()->subDays(3))->count();
        $users5 = User::whereDate("created_at", "=", Carbon::now()->subDays(4))->count();
        $users6 = User::whereDate("created_at", "=", Carbon::now()->subDays(5))->count();
        $users7 = User::whereDate("created_at", "=", Carbon::now()->subDays(6))->count();
        $list = [
            [
                "name" => 1,
                "uv" => $users1 * 1000,
                "value" => $users1
            ],
            [
                "name" => 2,
                "uv" => $users2 * 1000,
                "value" => $users2

            ],
            [
                "name" => 3,
                "uv" => $users3 * 1000,
                "value" => $users3

            ],
            [
                "name" => 4,
                "uv" => $users4 * 1000,
                "value" => $users4

            ],
            [
                "name" => 5,
                "uv" => $users5 * 1000,
                "value" => $users5

            ],
            [
                "name" => 6,
                "uv" => $users6 * 1000,
                "value" => $users6

            ],
            [
                "name" => 7,
                "uv" => $users7 * 1000,
                "value" => $users7
            ],
        ];
        rsort($list);
        return response()->json([
            "data" => $list,
            "message" => "get success"
        ], 200);
    }

    public function order()
    {
        $orders1 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(0))
            ->get()->sum("amount");
        $orders2 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(1))
            ->get()->sum("amount");
        $orders3 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(2))
            ->get()->sum("amount");
        $orders4 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(3))
            ->get()->sum("amount");
        $orders5 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(4))
            ->get()->sum("amount");
        $orders6 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(5))
            ->get()->sum("amount");
        $orders7 = Order::where([["payment_status", "=", 1], ["status", "=", 1]])
            ->whereDate("created_at", "=", Carbon::now()->subDays(6))
            ->get()->sum("amount");
        $list = [
            [
                "name" => 1,
                "uv" => $orders1 / 1000,
                "value" => $orders1
            ],
            [
                "name" => 2,
                "uv" => $orders2 / 1000,
                "value" => $orders2

            ],
            [
                "name" => 3,
                "uv" => $orders3 / 1000,
                "value" => $orders3

            ],
            [
                "name" => 4,
                "uv" => $orders4 / 1000,
                "value" => $orders4

            ],
            [
                "name" => 5,
                "uv" => $orders5 / 1000,
                "value" => $orders5

            ],
            [
                "name" => 6,
                "uv" => $orders6 / 1000,
                "value" => $orders6

            ],
            [
                "name" => 7,
                "uv" => $orders7 / 1000,
                "value" => $orders7
            ],
        ];
        rsort($list);
        return response()->json([
            "data" => $list,
            "message" => "get success"
        ], 200);
    }


    public function product()
    {
        $products1 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(0))->count();
        $products2 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(1))->count();
        $products3 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(2))->count();
        $products4 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(3))->count();
        $products5 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(4))->count();
        $products6 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(5))->count();
        $products7 = PurchasedProduct::whereDate("created_at", "=", Carbon::now()->subDays(6))->count();
        $list = [
            [
                "name" => 1,
                "uv" => $products1 * 1000,
                "value" => $products1
            ],
            [
                "name" => 2,
                "uv" => $products2 * 1000,
                "value" => $products2

            ],
            [
                "name" => 3,
                "uv" => $products3 * 1000,
                "value" => $products3

            ],
            [
                "name" => 4,
                "uv" => $products4 * 1000,
                "value" => $products4

            ],
            [
                "name" => 5,
                "uv" => $products5 * 1000,
                "value" => $products5

            ],
            [
                "name" => 6,
                "uv" => $products6 * 1000,
                "value" => $products6

            ],
            [
                "name" => 7,
                "uv" => $products7 * 1000,
                "value" => $products7
            ],
        ];
        rsort($list);
        return response()->json([
            "data" => $list,
            "message" => "get success"
        ], 200);
    }

    public function capital()
    {
        $orders1 = Order::whereDate("created_at", "=", Carbon::now()->subDays(0))
            ->get()->sum("amount");
        $orders2 = Order::whereDate("created_at", "=", Carbon::now()->subDays(1))
            ->get()->sum("amount");
        $orders3 = Order::whereDate("created_at", "=", Carbon::now()->subDays(2))
            ->get()->sum("amount");
        $orders4 = Order::whereDate("created_at", "=", Carbon::now()->subDays(3))
            ->get()->sum("amount");
        $orders5 = Order::whereDate("created_at", "=", Carbon::now()->subDays(4))
            ->get()->sum("amount");
        $orders6 = Order::whereDate("created_at", "=", Carbon::now()->subDays(5))
            ->get()->sum("amount");
        $orders7 = Order::whereDate("created_at", "=", Carbon::now()->subDays(6))
            ->get()->sum("amount");
        $list = [
            [
                "name" => 1,
                "uv" => $orders1 / 1000,
                "value" => $orders1
            ],
            [
                "name" => 2,
                "uv" => $orders2 / 1000,
                "value" => $orders2

            ],
            [
                "name" => 3,
                "uv" => $orders3 / 1000,
                "value" => $orders3

            ],
            [
                "name" => 4,
                "uv" => $orders4 / 1000,
                "value" => $orders4

            ],
            [
                "name" => 5,
                "uv" => $orders5 / 1000,
                "value" => $orders5

            ],
            [
                "name" => 6,
                "uv" => $orders6 / 1000,
                "value" => $orders6

            ],
            [
                "name" => 7,
                "uv" => $orders7 / 1000,
                "value" => $orders7
            ],
        ];
        rsort($list);
        return response()->json([
            "data" => $list,
            "message" => "get success"
        ], 200);
    }

    public function turnover()
    {
    }
}

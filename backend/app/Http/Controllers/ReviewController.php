<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\Models\Review;
use App\Models\ProductStar;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'create', 'getSumStars']]);
    }
    public function index(Request $request)
    {
        $reviews = Review::query();
        $reviews->where("reviews.parent_id", "=", null);
        $activeParams = $request->input("status");
        if (isset($activeParams)) {
            $reviews->where("reviews.status", "=", 1);
        }
        $productIdParams = $request->input("productid");
        if (isset($productIdParams)) {
            $reviews->where("reviews.product_id", "=", $productIdParams);
        }
        $starParams = $request->input("stars");
        if (isset($starParams)) {
            $reviews->where("reviews.stars", "=", $starParams);
        }
        $reviews->join("products", "products.id", "reviews.product_id");
        $reviews->select("reviews.*", "products.name as product_name", "products.image as product_image", "products.slug as product_slug");
        $reviews = HandleDataDefault::sort($reviews, $request->input("sortBy"));
        $reviews = HandleDataDefault::limit($reviews, $request->input("limit"));

        foreach ($reviews->items() as $review) {
            $childs = Review::where("parent_id", "=", $review->id)->get();
            $review->childs = $childs;
        }

        return response()->json([
            "message" => "get review success",
            "data" => $reviews
        ], 200);
    }

    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $review = new Review();
        $review->product_id = $request->productId;
        $review->fullname = $request->fullname;
        $review->email = $request->email;
        $review->message = $request->message;

        if (isset($request->stars)) {
            $review->stars = $request->stars;
        }

        if (isset($request->parentId)) {
            $review->parent_id = $request->parentId;
        }

        if (isset($request->type)) {
            $review->type = $request->type;
        }

        $review->save();

        if (isset($request->stars)) {
            $this->addStarTotal($request->productId);
        }

        return response()->json([
            "message" => "create success",
            "data" => $review
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $review = Review::find($id);
        $review->fullname = $request->fullname;
        $review->email = $request->email;
        $review->message = $request->message;
        $review->save();
        return response()->json([
            "message" => "update success",
        ], 200);
    }

    public function getSumStars($productId)
    {
        $totalStar = Review::where("product_id", "=", $productId)->count();
        $numOneStar = Review::where([["product_id", "=", $productId], ["stars", "=", 1]])->count();
        $numTwoStar = Review::where([["product_id", "=", $productId], ["stars", "=", 2]])->count();
        $numThreeStar = Review::where([["product_id", "=", $productId], ["stars", "=", 3]])->count();
        $numFourStar = Review::where([["product_id", "=", $productId], ["stars", "=", 4]])->count();
        $numFiveStar = Review::where([["product_id", "=", $productId], ["stars", "=", 5]])->count();
        $result = [
            "total" => $totalStar,
            "one" => $numOneStar,
            "two" => $numTwoStar,
            "three" => $numThreeStar,
            "four" => $numFourStar,
            "five" => $numFiveStar
        ];
        return response()->json([
            "message" => "get sum star success",
            "data" => $result
        ], 200);
    }

    private function addStarTotal($productId)
    {
        $stars = Review::where("product_id", "=", $productId)
            ->select("stars")
            ->get();

        $sum = 0;
        foreach ($stars as $cmt) {
            if (isset($cmt->stars)) {
                $sum += $cmt->stars;
            }
        }

        $average  = count($stars);
        $totalStar = ProductStar::where("product_id", "=", $productId)->first();
        $totalStar->stars = $average == 0 ? 5 : $sum / $average;
        $totalStar->save();
    }

    public function delete(Request $request)
    {
        $review = Review::find($request->id);
        $review->delete();
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $review = Review::find($id);
        $review->status = $review->status == 2 ? 1 : 2;
        $review->save();
        return response()->json([
            "message" => "change status success"
        ], 200);
    }
}

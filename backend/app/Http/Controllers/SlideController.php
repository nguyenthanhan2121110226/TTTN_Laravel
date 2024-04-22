<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\Models\Slide;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class SlideController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index(Request $request)
    {
        $slides = Slide::query();
        $slides->join("products", "products.id", "slides.product_id");
        $slides->select("slides.*", "products.name as name", "products.slug as slug", "products.short_desc as short_desc");
        $slides = HandleDataDefault::sort($slides, $request->input("sortBy"));
        $slides = HandleDataDefault::search($slides, $request->input("q"));
        $slides = HandleDataDefault::limit($slides, $request->input("limit"));
        return response()->json([
            "data" => $slides,
            "message" => "get All brands success",
        ], 200);
    }

    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $slide = new Slide();
        $slide->product_id = $request->productId;
        $slide->status = $request->status;
        $slide->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $fileName = Image::upload($request->file("image"));
            $slide->image = $fileName;
            $slide->save();
            return response()->json([
                "message" => "create slide success"
            ], 200);
        }
    }
    public function update(Request $request, $id)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $slide = Slide::find($id);
        $slide->product_id = $request->productId;
        $slide->status = $request->status;
        $slide->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $fileName = Image::update($request->file("image"), $slide->image);
            $slide->image = $fileName;
        }
        $slide->save();
        return response()->json([
            "message" => "update slide success"
        ], 200);
    }

    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $slide = Slide::find($id);
            Image::delete($slide->image);
            $slide->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $slide = Slide::find($id);
        $slide->status = $slide->status == 2 ? 1 : 2;
        $slide->save();
        return response()->json([
            "errCode" => 0,
            "message" => "change status success"
        ], 200);
    }

    private function getUser()
    {
        return JWTAuth::toUser(JWTAuth::getToken());
    }
}

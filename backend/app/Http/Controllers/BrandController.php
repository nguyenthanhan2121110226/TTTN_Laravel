<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\CustomClass\Slug;


use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class BrandController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index(Request $request)
    {
        $brands = Brand::query();
        $brands = HandleDataDefault::sort($brands, $request->input("sortBy"));
        $brands = HandleDataDefault::search($brands, $request->input("q"));
        $brands = HandleDataDefault::limit($brands, $request->input("limit"));

        return response()->json([
            "data" => $brands,
            "message" => "get All brands success",
        ], 200);
    }
    public function create(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'image' => 'required|mimes:jpeg,png,jpg,gif',
            ]
        );

        if ($validator->fails()) {
            return $validator->errors();
        }

        $slug = Slug::create($request->name);
        $categoryExists = Brand::where("slug", "=", $slug)->first();
        if ($categoryExists) {
            return response()->json(["errCode" => 1], 400);
        }

        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->slug = $slug;
        $brand->status = $request->status;
        $brand->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $fileName = Image::upload($request->file("image"));
            $brand->image = $fileName;
            $brand->save();
            return response()->json([
                "message" => "create brand success",
                "errCode" => 0,
                "data" => $brand
            ], 200);
        }
    }
    public function update(Request $request, $id)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
            ]
        );

        if ($validator->fails()) {
            return $validator->errors();
        }

        $slug = Slug::create($request->name);
        date_default_timezone_set("Asia/Ho_Chi_Minh");

        $brand = Brand::find($id);
        $brand->name = $request->name;
        $brand->slug = $slug;
        $brand->status = $request->status;
        $brand->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $path = Image::update($request->file("image"), $brand->image);
            $brand->image = $path;
        }
        $brand->save();
        return response()->json([
            "message" => "create category success",
            "errCode" => 0,
            "data" => $brand
        ], 200);
    }
    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $brand = Brand::find($id);
            Image::delete($brand->image);
            $brand->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $brand = Brand::find($id);
        $brand->status = $brand->status == 2 ? 1 : 2;
        $brand->save();
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

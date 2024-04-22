<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\CustomClass\Slug;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'getAll']]);
    }

    public function index(Request $request)
    {
        $categories = Category::query();
        $parentParams = $request->input("parent");
        if(isset($parentParams)){
            $categories->where("parent_id", "=", null);
        }
        $categories = HandleDataDefault::sort($categories, $request->input("sortBy"));
        $categories = HandleDataDefault::search($categories, $request->input("q"));
        $categories = HandleDataDefault::limit($categories, $request->input("limit"));
        foreach ($categories->items() as $categorie) {
            $categorie->parent_name = $categorie->parent->name ?? "Danh muc cha";
        }

        return response()->json([
            "data" => $categories,
            "message" => "get All categories success",
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
        $categoryExists = Category::where("slug", "=", $slug)->first();
        if ($categoryExists) {
            return response()->json(["errCode" => 1], 400);
        }

        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $category = new Category();
        $category->name = $request->name;
        $category->slug = $slug;
        $category->parent_id = $request->parentId == "0" ? null : $request->parentId;
        $category->status = $request->status;
        $category->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $fileName = Image::upload($request->file("image"));
            $category->image = $fileName;
            $category->save();
            return response()->json([
                "message" => "create category success",
                "errCode" => 0,
                "data" => $category
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
        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = $slug;
        $category->parent_id = $request->parentId == "0" ? null : $request->parentId;
        $category->status = $request->status;
        $category->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $path = Image::update($request->file("image"), $category->image);
            $category->image = $path;
        }
        $category->save();
        return response()->json([
            "message" => "create category success",
            "errCode" => 0,
            "data" => $category
        ], 200);
    }
    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $category = Category::find($id);
            Image::delete($category->image);
            $category->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $category = Category::find($id);
        $category->status = $category->status == 2 ? 1 : 2;
        $category->save();
        return response()->json([
            "errCode" => 0,
            "message" => "change status success"
        ], 200);
    }

    private function getUser()
    {
        return JWTAuth::toUser(JWTAuth::getToken());
    }
    public function getAll(Request $request)
    {
        $categories = Category::query();
        if ($request->input("limit")) {
            $categories->limit($request->input("limit"));
        }

        return response()->json([
            "data" => $categories->get(),
            "message" => "get category success",
        ], 200);
    }
}

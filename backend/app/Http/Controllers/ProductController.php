<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\CustomClass\Slug;
use App\Models\Brand;
use Tymon\JWTAuth\Facades\JWTAuth;


use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductSize;
use App\Models\ProductColor;
use App\Models\ProductStar;
use App\Models\PurchasedProduct;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', "show", "trash", "hotDeal"]]);
    }

    public function index(Request $request)
    {
        $products = Product::query();
        $products->where("products.status", "!=", 0);

        $diffrentFilterParam = $request->input("diffrent");
        if (isset($diffrentFilterParam)) {
            $products->where("products.id", "!=", $diffrentFilterParam);
        }
        $categoryFilterParam = $request->input("category");
        if (isset($categoryFilterParam)) {
            $products->whereExists(function ($query) use ($categoryFilterParam) {
                $query->select(DB::raw(1))
                    ->from('product_categories')
                    ->join('categories', 'product_categories.cat_id', '=', 'categories.id')
                    ->where('product_categories.product_id', '=', DB::raw('products.id'))
                    ->where('categories.slug', '=', $categoryFilterParam);
            });
        }

        // Thêm 'product_stars.stars' vào câu lệnh GROUP BY
        $products->groupBy("products.id", "products.slug", "products.brand_id", "products.name", "products.short_desc", "products.detail", "products.status", "products.image", "product_stars.id", "product_stars.stars", "products.price", "products.pricesale", "products.origin", "products.body", "products.material", "products.heel_height", "products.quantity", "products.updated_by", "products.created_at", "products.updated_at", "brands.name", "brands.image");
        
        $products->join("brands", "brands.id", "products.brand_id");
        $products->join("product_categories", "product_categories.product_id", "products.id");
        $products->join("categories", "categories.id", "product_categories.cat_id");
        $products->join("product_colors", "product_colors.product_id", "products.id");
        $products->join("product_sizes", "product_sizes.product_id", "products.id");
        $products->join("product_stars", "product_stars.product_id", "products.id");
        $products->select("products.*", "brands.name as brand_name", "brands.image as brand_image", "product_stars.stars as stars");
        $products->selectRaw("(100 - (pricesale * 100 / price)) as sale");

        // Xóa phần GROUP BY dư thừa ở cuối câu lệnh SELECT nếu cần thiết
        // $products->groupBy("products.id", "products.slug", "products.brand_id", "products.name", "products.short_desc", "products.detail", "products.status", "products.image", "product_stars.id", "products.price", "products.pricesale", "products.origin", "products.body");

        $products = HandleDataDefault::sort($products, $request->input("sortBy"));
        $products = HandleDataDefault::limit($products, $request->input("limit"));
        return response()->json([
            "data" => $products,
            "message" => "get success"
        ], 200);
    }








    public function create(Request $request)
    {
        $slug = Slug::create($request->name);
        $categoryExists = Product::where("slug", "=", $slug)->first();
        if ($categoryExists) {
            return response()->json(["errCode" => 1], 400);
        }
        $colors = json_decode($request->images, true);
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $product = new Product();
        $product->name = $request->name;
        $product->slug =  $slug;
        $product->brand_id = $request->brandId;
        $product->short_desc = $request->shortDesc;
        $product->detail = $request->detail;
        $product->image = $colors[0]["name"];
        $product->price = $request->price;
        $product->pricesale = $request->priceSale == 0 ? $request->price : $request->priceSale;
        $product->updated_by = $this->getUser()->id;
        $product->heel_height = $request->heelHeight;
        $product->origin = $request->origin;
        $product->material = $request->material;
        $product->body = $request->body;
        $product->quantity = $request->quantity;
        $product->status = $request->status;
        if ($product->save()) {
            $decodeCategories = json_decode($request->categories);
            foreach ($decodeCategories as $category) {
                $product_categories = new ProductCategory();
                $product_categories->product_id = $product->id;
                $product_categories->cat_id = $category;
                $product_categories->save();
            }
            //product size
            $decodeSizes = json_decode($request->sizes);
            foreach ($decodeSizes as $size) {
                $product_sizes = new ProductSize();
                $product_sizes->product_id = $product->id;
                $product_sizes->size = $size->value;
                $product_sizes->save();
            }
            // product color
            foreach ($colors as $color) {
                $product_colors = new ProductColor();
                $product_colors->product_id = $product->id;
                $product_colors->image = $color["name"];
                $product_colors->name = $color["color"]["label"];
                $product_colors->value = $color["color"]["value"];
                $product_colors->save();
            }

            $productStar = new ProductStar();
            $productStar->product_id = $product->id;
            $productStar->save();

            return response()->json([
                "errCode" => 0,
                "message" => "create product success",
            ], 200);
        }
    }

    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $product = Product::find($id);
            Image::delete($product->image);
            $product->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $slug = Slug::create($request->name);
        $colors = json_decode($request->images, true);
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $product = Product::find($id);
        $product->name = $request->name;
        $product->slug =  $slug;
        $product->brand_id = $request->brandId;
        $product->short_desc = $request->shortDesc;
        $product->detail = $request->detail;
        $product->image = $colors[0]["name"];
        $product->price = $request->price;
        $product->pricesale = $request->priceSale == 0 ? $request->price : $request->priceSale;
        $product->updated_by = $this->getUser()->id;
        $product->heel_height = $request->heelHeight;
        $product->origin = $request->origin;
        $product->material = $request->material;
        $product->body = $request->body;
        $product->quantity = $request->quantity;
        $product->status = $request->status;
        if ($product->save()) {
            //clean table
            $this->cleanTable($id);

            //product category
            $decodeCategories = json_decode($request->categories);
            foreach ($decodeCategories as $category) {
                $product_categories = new ProductCategory();
                $product_categories->product_id = $product->id;
                $product_categories->cat_id = $category;
                $product_categories->save();
            }
            //product size
            $decodeSizes = json_decode($request->sizes);
            foreach ($decodeSizes as $size) {
                $product_sizes = new ProductSize();
                $product_sizes->product_id = $product->id;
                $product_sizes->size = $size->value;
                $product_sizes->save();
            }
            // product color
            foreach ($colors as $color) {
                $product_colors = new ProductColor();
                $product_colors->product_id = $product->id;
                $product_colors->image = $color["name"];
                $product_colors->name = $color["color"]["label"];
                $product_colors->value = $color["color"]["value"];
                $product_colors->save();
            }

            return response()->json([
                "errCode" => 0,
                "message" => "update product success",
            ], 200);
        }
    }
    public function status($id)
    {
        $product = Product::find($id);
        $product->status = $product->status == 2 ? 1 : 2;
        $product->save();
        return response()->json([
            "errCode" => 0,
            "message" => "change status success"
        ], 200);
    }

    public function deltrash(Request $request)
    {
        foreach ($request->ids as $id) {
            $product = Product::find($id);
            $product->status = 0;
            $product->save();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "del to trash trash success"
        ], 200);
    }
    public function restore(Request $request)
    {
        foreach ($request->ids as $id) {
            $product = Product::find($id);
            $product->status = 2;
            $product->save();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "del to trash trash success"
        ], 200);
    }

    public function show($slug)
    {
        $product = Product::where("slug", "=", $slug)
            ->select("*")
            ->selectRaw("(100 - (pricesale * 100 / price)) as sale")
            ->first();
        $productCategories = ProductCategory::where("product_categories.product_id", "=", $product->id)
            ->join("categories", "categories.id", "product_categories.cat_id")
            ->select("categories.*")->get();
        $product->categories = $productCategories;
        $brands = Brand::find($product->brand_id);
        $product->brands = $brands;
        $productColors = ProductColor::where("product_id", "=", $product->id)->get();
        $product->colors = $productColors;
        $productSizes = ProductSize::where("product_id", "=", $product->id)->get();
        $product->sizes = $productSizes;
        $stars = ProductStar::where("product_id", "=", $product->id)->first();
        $product->stars = isset($stars) ? $stars->stars : 5;
        return response()->json([
            "data" => $product,
            "message" => "get product " . $slug . " success"
        ], 200);
    }
    public function trash(Request $request)
    {
        $products = Product::query();
        $products->where("products.status", "=", 0);
        $searchFilterParam = $request->input("search");
        if (isset($searchFilterParam)) {
            $products->where("products.name", "like", "%" . $searchFilterParam . "%");
        }
        $products->join("brands", "brands.id", "products.brand_id");
        $products->select("products.*", "brands.name as brand_name");
        $products = HandleDataDefault::limit($products, $request->input("limit"));
        return response()->json([
            "data" => $products,
            "message" => "get success"
        ], 200);
    }

    public function hotDeal(Request $request)
    {
        $product = PurchasedProduct::query();
        $product->join("products", "products.id", "purchased_products.product_id");
        $product->select("products.*");
        $product->selectRaw("count(products.id) as number");
        $product->groupBy("products.id");
        $product->orderBy("number", "desc");
        $typeParams = $request->input("type");
        if (isset($typeParams) && $typeParams === "single") {
            return response()->json([
                "message" => "get success",
                "data" => $product->first()
            ], 200);
        } else {
            $products = HandleDataDefault::limit($product, $request->input("limit"));
            return response()->json([
                "message" => "get success",
                "data" => $products
            ], 200);
        }
    }

    private function getUser()
    {
        return JWTAuth::toUser(JWTAuth::getToken());
    }


    public function cleanTable($id)
    {
        ProductCategory::where("product_id", "=", $id)->delete();
        ProductColor::where("product_id", "=", $id)->delete();
        ProductSize::where("product_id", "=", $id)->delete();
    }
}

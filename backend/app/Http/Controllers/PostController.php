<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\CustomClass\Slug;

use App\Models\Post;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', "show", "trash", "increaseView"]]);
    }

    public function index(Request $request)
    {
        $posts = Post::query();
        $posts->where("posts.status", "!=", 0);
        $topicFilterParam = $request->input("topic");
        if (isset($topicFilterParam)) {
            $posts->where("topics.slug", "=", $topicFilterParam);
        }
        $posts->join("topics", "topics.id", "posts.top_id");
        $posts->select("posts.*", "topics.name as top_name", "topics.slug as top_slug");
        $posts = HandleDataDefault::sort($posts, $request->input("sortBy"));
        $posts = HandleDataDefault::search($posts, $request->input("search"));
        $posts = HandleDataDefault::limit($posts, $request->input("limit"));
        return response()->json([
            "data" => $posts,
            "message" => "get All posts success",
        ], 200);
    }
    public function trash(Request $request)
    {
        $posts = Post::query();
        $posts->where("posts.status", "=", 0);
        $posts->join("topics", "topics.id", "posts.top_id");
        $posts->select("posts.*", "topics.name as top_name", "topics.slug as top_slug");
        $posts = HandleDataDefault::sort($posts, $request->input("sortBy"));
        $posts = HandleDataDefault::search($posts, $request->input("search"));
        $posts = HandleDataDefault::limit($posts, $request->input("limit"));
        return response()->json([
            "data" => $posts,
            "message" => "get All posts success",
        ], 200);
    }

    public function create(Request $request)
    {

        $slug = Slug::create($request->name);
        $categoryExists = Post::where("slug", "=", $slug)->first();
        if ($categoryExists) {
            return response()->json(["errCode" => 1], 400);
        }
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $post = new Post();
        $post->top_id = $request->topId;
        $post->name = $request->name;
        $post->slug = $slug;
        $post->short_desc = $request->shortDesc;
        $post->detail = $request->detail;
        $post->view = 0;
        $post->status = $request->status;
        $post->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $fileName = Image::upload($request->file("image"));
            $post->image = $fileName;
            $post->save();
            return response()->json([
                "message" => "create success",
                "errCode" => 0
            ], 200);
        }
    }

    public function update(Request $request, $id)
    {
        $slug = Slug::create($request->name);
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $post = Post::find($id);
        $post->top_id = $request->topId;
        $post->name = $request->name;
        $post->slug = $slug;
        $post->short_desc = $request->shortDesc;
        $post->detail = $request->detail;
        $post->status = $request->status;
        $post->updated_by = $this->getUser()->id;
        if ($request->hasFile("image")) {
            $path = Image::update($request->file("image"), $post->image);
            $post->image = $path;
        }
        $post->save();
        return response()->json([
            "message" => "update success",
            "errCode" => 0
        ], 200);
    }

    public function show($slug)
    {
        $post = Post::where("posts.slug", "=", $slug)
            ->join("topics", "topics.id", "posts.top_id")
            ->select("posts.*", "topics.name as top_name", "topics.slug as top_slug")
            ->first();
        return response()->json([
            "message" => "update success",
            'data' => $post
        ], 200);
    }

    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $post = Post::find($id);
            Image::delete($post->image);
            $post->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }
    public function restore(Request $request)
    {
        foreach ($request->ids as $id) {
            $post = Post::find($id);
            $post->status = 2;
            $post->save();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "restore success"
        ], 200);
    }
    public function status($id)
    {
        $post = Post::find($id);
        $post->status = $post->status == 2 ? 1 : 2;
        $post->save();
        return response()->json([
            "errCode" => 0,
            "message" => "change status success"
        ], 200);
    }

    public function deltrash(Request $request)
    {
        foreach ($request->ids as $id) {
            $post = Post::find($id);
            $post->status = 0;
            $post->save();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "detete trash success"
        ], 200);
    }


    public function increaseView($id)
    {
        $post = Post::find($id);
        $post->view =$post->view + 1;
        $post->save();
        return response()->json([
            "message" => "increase success",
        ], 200);
    }

    private function getUser()
    {
        return JWTAuth::toUser(JWTAuth::getToken());
    }
}

<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'create']]);
    }
    public function index(Request $request)
    {
        $comments = Comment::query();
        $comments->where("comments.parent_id", "=", null);
        $postIdParams = $request->input("postid");
        if (isset($postIdParams)) {
            $comments->where("comments.post_id", "=", $postIdParams);
        }
        $comments->join("posts", "posts.id", "comments.post_id");
        $comments->select("comments.*", "posts.name as post_name", "posts.image as post_image", "posts.slug as post_slug");
        $comments = HandleDataDefault::sort($comments, $request->input("sortBy"));
        $comments = HandleDataDefault::limit($comments, $request->input("limit"));

        foreach ($comments->items() as $comment) {
            $childs = Comment::where("parent_id", "=", $comment->id)->get();
            $comment->childs = $childs;
        }

        return response()->json([
            "message" => "get comment success",
            "data" => $comments
        ], 200);
    }

    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $comment = new Comment();
        $comment->post_id = $request->postId;
        $comment->fullname = $request->fullname;
        $comment->email = $request->email;
        $comment->message = $request->message;


        if (isset($request->parentId)) {
            $comment->parent_id = $request->parentId;
        }

        if (isset($request->type)) {
            $comment->type = $request->type;
        }

        $comment->save();

        return response()->json([
            "message" => "create success",
            "data" => $comment
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        $comment->message = $request->message;
        $comment->save();
        return response()->json([
            "message" => "update success",
        ], 200);
    }


    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $comment = Comment::find($id);
            $comment->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $comment = Comment::find($id);
        $comment->status = $comment->status == 2 ? 1 : 2;
        $comment->save();
        return response()->json([
            "message" => "change status success"
        ], 200);
    }
}

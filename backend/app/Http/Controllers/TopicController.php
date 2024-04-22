<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\CustomClass\Slug;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Topic;
use Tymon\JWTAuth\Facades\JWTAuth;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $topics = Topic::query();
        $topics = HandleDataDefault::sort($topics, $request->input("sortBy"));
        $topics = HandleDataDefault::search($topics, $request->input("q"));
        $topics = HandleDataDefault::limit($topics, $request->input("limit"));

        return response()->json([
            "data" => $topics,
            "message" => "get All brands success",
        ], 200);
    }
    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $slug = Slug::create($request->name);
        $categoryExists = Topic::where("slug", "=", $slug)->first();
        if ($categoryExists) {
            return response()->json(["errCode" => 1], 400);
        }
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $topic = new Topic();
        $topic->name = $request->name;
        $topic->slug = $slug;
        $topic->status = $request->status;
        $topic->updated_by = $this->getUser()->id;
        $topic->save();
        return response()->json([
            "message" => "create topic success",
            "errCode" => 0
        ], 200);
    }


    public function update(Request $request, $id)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $topic = Topic::find($id);
        $topic->name = $request->name;
        $topic->slug = Slug::create($request->name);
        $topic->status = $request->status;
        $topic->updated_by = $this->getUser()->id;
        $topic->save();
        return response()->json([
            "message" => "update topic success",
            "errCode" => 0
        ], 200);
    }
    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $topic = Topic::find($id);
            $topic->delete();
        }
        return response()->json([
            "errCode" => 0,
            "message" => "delete success"
        ], 200);
    }

    public function status($id)
    {
        $topic = Topic::find($id);
        $topic->status = $topic->status == 2 ? 1 : 2;
        $topic->save();
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

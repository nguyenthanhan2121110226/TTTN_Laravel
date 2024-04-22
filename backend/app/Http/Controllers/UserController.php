<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\CustomClass\Image;
use App\Models\Social;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['update']]);
    }
    public function index(Request $request)
    {
        $users = User::query();
        $publicParams = $request->input("public");
        if (isset($publicParams)) {
            $users->where("status", "!=", 0);
        }
        $statusParams = $request->input("status");
        if (isset($statusParams)) {
            $users->where("status", "=", $statusParams);
        }
        $trashParams = $request->input("trash");
        if (isset($trashParams)) {
            $users->where("status", "=", 0);
        }
        $searchParams = $request->input("search");
        if (isset($searchParams)) {
            $users->where("fullname", "like", "%" . $searchParams . "%");
        }
        $adminParams = $request->input("role");
        if (isset($adminParams)) {
            $users->where("role", "=", $adminParams);
        }
        $users = HandleDataDefault::sort($users, $request->input("sortBy"));
        $users = HandleDataDefault::limit($users, $request->input("limit"));

        foreach ($users->items() as $user) {
            $user->role_name = $this->getRoleName($user->role);
        }
        return response()->json([
            "errCode" => 0,
            "message" => "get users success",
            "data" => $users
        ], 200);
    }
    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100|unique:users',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $user = new User();
        $user->fullname = $request->fullname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->address = $request->address ?? null;
        $user->phone = $request->phone ?? null;
        $user->date = $request->date ?? null;
        $user->role = $request->role;
        $user->status = $request->status;
        if ($request->hasFile("image")) {
            $path = Image::upload($request->file("image"));
            $user->avatar = $path;
            $user->save();
            return response()->json([
                "message" => "create success",
                "data" => $user,
                "errCode" => 0
            ], 200);
        }
    }


    public function show($id)
    {
        $user = User::find($id);
        return response()->json([
            "data" => $user,
            "message" => "get success",
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->fullname = $request->fullname;
        $user->email = $request->email;
        $user->address = $request->address ?? null;
        $user->phone = $request->phone ?? null;
        $user->date = $request->date ?? null;
        $user->role = $request->role;
        $user->status = $request->status;
        if ($request->hasFile("image")) {
            $path = Image::update($request->file("image"), $user->avatar);
            $user->avatar = $path;
        }
        $user->save();
        return response()->json([
            "message" => "update success",
            "data" => $user,
        ], 200);
    }

    public function status($id)
    {
        $user = User::find($id);
        $user->status = $user->status === 2 ? 1 : 2;
        $user->save();
        return response()->json([
            "message" => "change status success",
            "errCode" => 0,
            "data" => $user
        ], 200);
    }

    public function delete(Request $request)
    {
        foreach ($request->ids as $id) {
            $user = User::find($id);
            $check = Image::delete($user->avatar);
            $user->delete();
        }
        return response()->json([
            "message" => "success",
            "errCode" => 0
        ], 200);
    }


    public function deltrash(Request $request)
    {
        foreach ($request->ids as $id) {
            $user = User::find($id);
            $user->status = 0;
            $user->save();
        }
        return response()->json([
            "message" => "success",
            "errCode" => 0
        ], 200);
    }


    private function getRoleName($role)
    {
        switch ($role) {
            case 0:
                return "Khách hàng";
            case 1:
                return "Quản trị viên";
            case 2:
                return "Phó quản trị viên";
            case 3:
                return "Cộng tác viên";
            default:
                break;
        }
    }

    public function restore(Request $request)
    {
        foreach ($request->ids as $id) {
            $user = User::find($id);
            $user->status = 2;
            $user->save();
        }
        return response()->json([
            "message" => "success",
            "errCode" => 0
        ], 200);
    }
}

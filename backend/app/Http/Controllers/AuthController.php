<?php

namespace App\Http\Controllers;

use App\Mail\ForgotPasswordMail;
use App\Models\ForgotPassword;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'login_admin', 'login_social', "forgotPassword", "checkTokenPassword", "updatePassword"]]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if ($token = JWTAuth::attempt($credentials)) {
            return response()->json($this->createNewToken($token), 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {

        date_default_timezone_set("Asia/Ho_Chi_Minh");

        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $user = new User();
        $user->fullname = $request->fullname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->avatar = "no-avatar.jpg";
        $user->save();
        return response()->json([
            'message' => 'User successfully registered',
            "errCode" => 0
        ], 201);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile()
    {
        return response()->json([
            "data" => auth()->user()
        ], 200);
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        if (auth()->user()->status === 0 || auth()->user()->status === 2) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 36000,
            'user' => auth()->user()
        ];
    }

    public function login_admin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if ($token = JWTAuth::attempt($credentials)) {

            $user = $this->createNewToken($token)['user'];
            if ($user->role === 0) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return response()->json($this->createNewToken($token), 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function login_social(Request $request)
    {
        $email = $request->email;
        $check = User::where([["email", "=", $email], ["type", "=", $request->type]])->exists();
        if ($check) {
            $user = User::where("email", "=", $email)->first();
            return response()->json([
                'message' => 'get user success',
                "data" => $user
            ], 200);
        } else {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:100|unique:users',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
            $user = new User();
            $user->fullname = $request->fullname;
            $user->email = $request->email;
            $user->password = bcrypt(Str::random(20));
            $user->avatar = "no-avatar.jpg";
            $user->type = $request->type;
            $user->save();
            return response()->json([
                'message' => 'User successfully registered',
                "data" => $user
            ], 201);
        }
    }


    public function changePassword(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'password' => 'required|string|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $id = auth()->user()->id;
        $user = User::find($id);
        $user->password = bcrypt($request->password);
        $user->save();
        unset($user->password);
        $data = ["user" => $user, "access_token" => $this->refresh()];
        return response()->json(
            [
                "data" => $data,
                "message" => "change success"
            ],
            200
        );
    }

    public function forgotPassword(Request $request)
    {
        $exists = User::whereEmail($request->email)->first();
        if (isset($exists)) {
            date_default_timezone_set("Asia/Ho_Chi_Minh");
            $token = strtolower(Str::random(70));
            $forgotPassword = new ForgotPassword();
            $forgotPassword->user_id = $exists->id;
            $forgotPassword->token = $token;
            if ($forgotPassword->save()) {
                $details = [
                    "email" => $request->email,
                    "token" => $forgotPassword->token,
                ];
                Mail::to($request->email)->send(new ForgotPasswordMail($details));
                if (Mail::failures()) {
                    return response()->json([
                        "message" => "store success but mail fail",
                        "errCode" => 1,
                    ], 201);
                } else {
                    return response()->json([
                        "message" => "store and mail fail success",
                        "errCode" => 0,
                    ], 201);
                }
            }
        } else {
            return response()->json([
                "errCode" => 1
            ], 400);
        }
    }

    public function checkTokenPassword(Request $request)
    {
        $check = ForgotPassword::where("token", "=", $request->token)->first();
        if (isset($check)) {
            return response()->json([
                "errCode" => 0
            ], 200);
        } else {
            return response()->json([
                "errCode" => 1
            ], 400);
        }
    }
    public function updatePassword(Request $request)
    {
        $userId = ForgotPassword::where("token", "=", $request->token)->first();
        if (!isset($userId)) {
            return response()->json([
                "errCode" => 1
            ], 400);
        }
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }


        $user = User::find($userId->user_id);
        $user->password = bcrypt($request->password);
        $user->type = "df";
        if ($user->save()) {
            ForgotPassword::where("token", "=", $request->token)->delete();
            return response()->json([
                "errCode" => 0
            ], 200);
        } else {
            return response()->json([
                "errCode" => 1
            ], 400);
        }
    }
}

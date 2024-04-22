<?php

namespace App\Http\Controllers;

use App\CustomClass\HandleDataDefault;
use App\Mail\SupportMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', "create"]]);
    }


    public function index(Request $request)
    {
        $contacts = Contact::query();
        $typeParam = $request->input("type");
        $statusParam = $request->input("status");
        if (isset($typeParam)) {
            $contacts->where("type", "=", $typeParam);
        }
        if (isset($statusParam)) {
            $contacts->where("status", "=", $statusParam);
        }
        $idParam = $request->input("id");
        if (isset($idParam)) {
            $contacts = $contacts->where("id", "=", $idParam)->first();
        } else {
            $contacts = HandleDataDefault::sort($contacts, $request->input("sortBy"));
            $contacts = HandleDataDefault::limit($contacts, $request->input("limit"));
        }
        return response()->json([
            "data" => $contacts,
            "message" => "get success"
        ], 200);
    }
    public function create(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $contact = new Contact();
        $contact->fullname = $request->fullname;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        $contact->status = $request->status ?? 2;
        $contact->type = $request->type ?? "customer";
        if ($contact->save()) {
            $type = $request->type;
            if (isset($type) && $type === "admin") {
                $details = [
                    "email" => $request->email,
                    "content" => $request->customerContent,
                    "feedback" => $request->message,
                ];

                Mail::to($request->email)->send(new SupportMail($details));
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
            } else {
                return response()->json([
                    "message" => "success",
                    "errCode" => 0,
                ], 200);
            }
        }
    }
}

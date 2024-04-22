<?php

namespace App\Http\Controllers;

use App\CustomClass\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        return Image::upload($request->file("image"));
    }

    public function delete(Request $request)
    {
        if(Image::delete($request->name)){
            return response()->json([
                "errCode" => 0,
                "mesage" => "delete success",
            ], 202);
        }
        return response()->json([
            "errCode" => 1,
            "mesage" => "delete fail",
        ], 202);
    }

    
}

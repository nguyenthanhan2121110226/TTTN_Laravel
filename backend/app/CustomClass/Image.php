<?php

namespace App\CustomClass;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Image
{
    public static function upload($file)
    {
        $name = Str::random(10) . "-" . $file->getClientOriginalName();
        $file->storeAs('public/images', $name);
        return $name;
    }

    public static function delete($name)
    {
        $path = 'public/images/' . $name;
        if (Storage::exists($path) && $name != "no-avatar.jpg") {
            Storage::delete($path);
            return true;
        }
        return false;
    }

    public static function update($file, $name)
    {
        $path = 'public/images/' . $name;
        if (Storage::exists($path) && $name != "no-avatar.jpg") {
            Storage::delete($path);
        }
        $newName = Str::random(10) . "-" . $file->getClientOriginalName();
        $file->storeAs('public/images', $newName);
        return $newName;
    }
}

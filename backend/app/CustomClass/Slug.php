<?php

namespace App\CustomClass;
use Illuminate\Support\Str;


class Slug
{
    public static function create($input) {
        return Str::slug($input, '-');
    }

}


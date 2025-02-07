<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = "products";

    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, 'product_categories', 'product_id', 'cat_id');
    }
}

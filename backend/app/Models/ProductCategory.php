<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table = "product_categories";

    public function category()
    {
        return $this->belongsTo(Category::class, 'cat_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_categories', 'cat_id', 'product_id');
    }
}

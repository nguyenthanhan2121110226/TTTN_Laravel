<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->unsignedBigInteger("brand_id")->nullable();
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->string("slug")->unique();
            $table->mediumText("short_desc");
            $table->longText("detail");
            $table->tinyInteger("status")->default(1);
            $table->string("image");
            $table->float("price", 12);
            $table->float("pricesale", 12)->default(0);
            $table->string("origin")->nullable();
            $table->string("body")->nullable();
            $table->string("material")->nullable();
            $table->string("heel_height")->nullable();
            $table->integer("quantity")->default(11);
            $table->unsignedBigInteger("updated_by");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

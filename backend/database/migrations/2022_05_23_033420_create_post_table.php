<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("top_id");
            $table->foreign("top_id")->references("id")->on("topics")->onDelete("cascade");
            $table->string("name");
            $table->string("slug");
            $table->integer("view")->default(0);
            $table->mediumText("short_desc");
            $table->longText("detail");
            $table->tinyInteger("status");
            $table->string("image");
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
        Schema::dropIfExists('posts');
    }
}

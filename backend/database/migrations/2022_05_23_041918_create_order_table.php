<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users");
            $table->string("reciver_name");
            $table->string("reciver_email");
            $table->string("reciver_phone");
            $table->string("address");
            $table->text("note")->nullable();
            $table->float("amount", 16);
            $table->float("voucher", 12)->default(0);
            $table->float("shipping", 12)->default(0);
            $table->string("payment_method")->default("cash");
            $table->tinyInteger("payment_status");
            $table->tinyInteger("status")->default(3);
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
        Schema::dropIfExists('orders');
    }
}

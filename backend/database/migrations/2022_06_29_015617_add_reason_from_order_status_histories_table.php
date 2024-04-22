<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReasonFromOrderStatusHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_status_histories', function (Blueprint $table) {
            // Loại bỏ cột "reason"
            $table->dropColumn('reason');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('order_status_histories', function (Blueprint $table) {
            // Thêm lại cột "reason" với kiểu dữ liệu text và cho phép giá trị null
            $table->text("reason")->nullable();
        });
    }
}

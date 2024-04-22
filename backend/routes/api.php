<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\OrderStatusHistoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\StatisticsController;















/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/login-admin', [AuthController::class, 'login_admin']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::post('/login-social', [AuthController::class, 'login_social']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('/check-token-password', [AuthController::class, 'checkTokenPassword']);
    Route::post('/update-password', [AuthController::class, 'updatePassword']);

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'product'
], function ($router) {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/trash', [ProductController::class, 'trash']);
    Route::post('/create', [ProductController::class, 'create']);
    Route::post('/delete', [ProductController::class, 'delete']);
    Route::post('/update/{id}', [ProductController::class, 'update']);
    Route::get('/show/{slug}', [ProductController::class, 'show']);
    Route::get('/status/{id}', [ProductController::class, 'status']);
    Route::post('/del-trash', [ProductController::class, 'deltrash']);
    Route::post('/restore', [ProductController::class, 'restore']);
    Route::get('/hot-deal', [ProductController::class, 'hotDeal']);
    Route::get('/product-category/{cat_id}', [ProductController::class, 'productCategory']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'category'
], function ($router) {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/get-all', [CategoryController::class, 'getAll']);
    Route::post('/create', [CategoryController::class, 'create']);
    Route::post('/delete', [CategoryController::class, 'delete']);
    Route::get('/status/{id}', [CategoryController::class, 'status']);
    Route::post('/update/{id}', [CategoryController::class, 'update']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'brand'
], function ($router) {
    Route::get('/', [BrandController::class, 'index']);
    Route::post('/create', [BrandController::class, 'create']);
    Route::post('/delete', [BrandController::class, 'delete']);
    Route::get('/status/{id}', [BrandController::class, 'status']);
    Route::post('/update/{id}', [BrandController::class, 'update']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'topic'
], function ($router) {
    Route::get('/', [TopicController::class, 'index']);
    Route::post('/create', [TopicController::class, 'create']);
    Route::post('/delete', [TopicController::class, 'delete']);
    Route::get('/status/{id}', [TopicController::class, 'status']);
    Route::post('/update/{id}', [TopicController::class, 'update']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'post'
], function ($router) {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/trash', [PostController::class, 'trash']);
    Route::post('/create', [PostController::class, 'create']);
    Route::post('/delete', [PostController::class, 'delete']);
    Route::post('/update/{id}', [PostController::class, 'update']);
    Route::get('/show/{slug}', [PostController::class, 'show']);
    Route::get('/status/{id}', [PostController::class, 'status']);
    Route::post('/del-trash', [PostController::class, 'deltrash']);
    Route::post('/restore', [PostController::class, 'restore']);
    Route::get('/increase-view/{id}', [PostController::class, 'increaseView']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'image'
], function ($router) {
    Route::post('/upload', [ImageController::class, 'upload']);
    Route::post('/upload-multipe', [ImageController::class, 'uploadMultipe']);

    Route::post('/delete', [ImageController::class, 'delete']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function ($router) {
    Route::get('/', [UserController::class, 'index']);
    Route::post('/create', [UserController::class, 'create']);
    Route::post('/delete', [UserController::class, 'delete']);
    Route::post('/update/{id}', [UserController::class, 'update']);
    Route::get('/show/{slug}', [UserController::class, 'show']);
    Route::get('/status/{id}', [UserController::class, 'status']);
    Route::post('/deltrash', [UserController::class, 'deltrash']);
    Route::post('/restore', [UserController::class, 'restore']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'slide'
], function ($router) {
    Route::get('/', [SlideController::class, 'index']);
    Route::post('/create', [SlideController::class, 'create']);
    Route::post('/delete', [SlideController::class, 'delete']);
    Route::get('/status/{id}', [SlideController::class, 'status']);
    Route::post('/update/{id}', [SlideController::class, 'update']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'review'
], function ($router) {
    Route::get('/', [ReviewController::class, 'index']);
    Route::post('/create', [ReviewController::class, 'create']);
    Route::post('/delete', [ReviewController::class, 'delete']);
    Route::get('/status/{id}', [ReviewController::class, 'status']);
    Route::post('/update/{id}', [ReviewController::class, 'update']);
    Route::get('/get-sum-stars/{productId}', [ReviewController::class, 'getSumStars']);

});


Route::group([
    'middleware' => 'api',
    'prefix' => 'comment'
], function ($router) {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/create', [CommentController::class, 'create']);
    Route::post('/delete', [CommentController::class, 'delete']);
    Route::get('/status/{id}', [CommentController::class, 'status']);
    Route::post('/update/{id}', [CommentController::class, 'update']);
    Route::get('/get-sum-stars/{productId}', [CommentController::class, 'getSumStars']);

});


Route::group([
    'middleware' => 'api',
    'prefix' => 'voucher'
], function ($router) {
    Route::get('/', [VoucherController::class, 'index']);
    Route::get('/get-user', [VoucherController::class, 'getUser']);
    Route::post('/create', [VoucherController::class, 'create']);
    Route::post('/delete', [VoucherController::class, 'delete']);
    Route::get('/status/{id}', [VoucherController::class, 'status']);
    Route::post('/update/{id}', [VoucherController::class, 'update']);
    Route::get('/get-sum-stars/{productId}', [VoucherController::class, 'getSumStars']);

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'order'
], function ($router) {
    Route::get('/', [OrderController::class, 'index']);
    Route::get('/get-user', [OrderController::class, 'getUser']);
    Route::post('/create', [OrderController::class, 'create']);
    Route::post('/delete', [OrderController::class, 'delete']);
    Route::post('/status/{id}', [OrderController::class, 'status']);
    Route::post('/payment-status/{id}', [OrderController::class, 'paymentStatus']);
    Route::post('/update/{id}', [OrderController::class, 'update']);
    Route::get('/get-sum-stars/{productId}', [OrderController::class, 'getSumStars']);
    Route::get('/hot-user', [OrderController::class, 'getUserOrder']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'order-detail'
], function ($router) {
    Route::get('/{orderId}', [OrderDetailController::class, 'index']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'order-status-history'
], function ($router) {
    Route::get('/{orderId}', [OrderStatusHistoryController::class, 'index']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'contact'
], function ($router) {
    Route::get('/', [ContactController::class, 'index']);
    Route::post('/create', [ContactController::class, 'create']);
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'statistics'
], function ($router) {
    Route::get('/user', [StatisticsController::class, 'user']);
    Route::get('/product', [StatisticsController::class, 'product']);
    Route::get('/order', [StatisticsController::class, 'order']);
    Route::get('/capital', [StatisticsController::class, 'capital']);

});

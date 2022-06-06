<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\StockController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/article',[ArticleController::class,'index']);
Route::post('/article/create',[ArticleController::class,'create']);
Route::delete('/article/delete/{id}',[ArticleController::class,'delete']);
Route::get('/stock',[StockController::class,'index']);
Route::post('/stock/create',[StockController::class,'create']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



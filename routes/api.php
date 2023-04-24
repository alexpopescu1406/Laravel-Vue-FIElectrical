<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ArticleController;
use \App\Http\Controllers\ToolController;
use \App\Http\Controllers\VlabController;


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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('/article', ArticleController::class);
    Route::resource('/tool', ToolController::class);
    Route::resource('/event', EventController::class);
    Route::resource('/vlab', VlabController::class);


});

Route::get('/article-by-slug/{article:slug}', [ArticleController::class, 'showForGuest']);
Route::get('/tool-by-slug/{tool:slug}', [ToolController::class, 'showForGuest']);
Route::get('/event-by-slug/{event:slug}', [EventController::class, 'showForGuest']);
Route::get('/vlab-by-slug/{vlab:slug}', [VlabController::class, 'showForGuest']);



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

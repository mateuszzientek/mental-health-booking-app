<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailQuestionController;
use App\Http\Controllers\ForgetPassword;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post("/logout", [AuthController::class, 'logout']);
});

Route::post("/signup", [AuthController::class, 'signup']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/forgot-password", [ForgetPassword::class, 'forgetPassword']);
Route::post("reset-password", [ForgetPassword::class, 'resetPassword']);
Route::post("check-expirationTime", [ForgetPassword::class, 'checkExpirationTime']);
Route::post("emailQuestion", [EmailQuestionController::class, 'sendEmail']);

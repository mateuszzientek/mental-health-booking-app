<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgetPassword;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpecialistController;
use App\Http\Controllers\EmailQuestionController;

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
Route::post("/reset-password", [ForgetPassword::class, 'resetPassword']);
Route::post("check-expirationTime", [ForgetPassword::class, 'checkExpirationTime']);
Route::post("/emailQuestion", [EmailQuestionController::class, 'sendEmail']);
Route::get("/getSpecialists", [SpecialistController::class, 'getSpecialist']);
Route::get('/getSingleSpecialist/{id}', [SpecialistController::class, 'getSingleSpecialist']);
Route::put('/changePersonalData', [ProfileController::class, 'changePersonalData'])->middleware('auth:sanctum');

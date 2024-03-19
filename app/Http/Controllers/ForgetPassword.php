<?php

namespace App\Http\Controllers;

use Exception;
use Carbon\Carbon;
use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use App\Models\Password_reset_token;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Config;
use App\Http\Requests\ForgotPasswordRequest;

class ForgetPassword extends Controller
{
    public function forgetPassword(ForgotPasswordRequest $request)
    {
        $emailReset = $request->validated();

        $token = Uuid::uuid4()->toString();

        $expiration = now()->addMinutes(10);


        try {

            $passwordResetToken = Password_reset_token::firstOrNew(['email' => $emailReset['emailReset']]);
            $passwordResetToken->token = $token;
            $passwordResetToken->expiration_date = $expiration;
            $passwordResetToken->save();

            $email = $emailReset['emailReset'];

            Mail::send("emails.forget-password", ['token' => $token, 'app_url' => env('APP_CLIENT_URL')], function ($message) use ($email) {
                $message->to($email);
                $message->subject("Reset Password");
            });

            return response()->json(['expiration' => $expiration]);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use App\Http\Requests\ResetPassword;
use App\Models\Password_reset_token;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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

    public function checkExpirationTime(Request $request)
    {
        $request->validate([
            'token' => 'required'
        ]);

        $currentTime = now();

        try {

            $tokenEntry = Password_reset_token::where('token', $request['token'])->first();

            if (!$tokenEntry) {
                return response()->json(['redirectMessage' => 'Token not found.'], 200);
            }

            $expirationTime = $tokenEntry->expiration_date;

            if ($expirationTime <  $currentTime) {
                return response()->json(['redirectMessage' => 'Token has expired.'], 200);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }

        return response('', 204);
    }

    public function resetPassword(ResetPassword $request)
    {
        $data = $request->validated();

        $currentTime = now();

        try {

            $tokenEntry = Password_reset_token::where('token', $data['token'])->first();

            if (!$tokenEntry) {
                return response()->json(['error' => 'Token not found.'], 404);
            }

            $expirationTime = $tokenEntry->expiration_date;

            if ($expirationTime <  $currentTime) {
                return response()->json(['error' => 'Token has expired.'], 404);
            }

            $user = User::where('email', $tokenEntry->email)->first();

            if (!$user) {
                return response()->json(['error' => 'User not found.'], 404);
            }

            $user->password = Hash::make($request['password']);
            $user->save();

            $tokenEntry->delete();

            return response()->json(['message' => 'Password updated successfully.']);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }
}

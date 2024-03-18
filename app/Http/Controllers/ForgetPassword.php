<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Models\Password_reset_token;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class ForgetPassword extends Controller
{
    public function forgetPassword(ForgotPasswordRequest $request)
    {
        $emailReset = $request->validated();

        $token = Uuid::uuid4()->toString();

        Password_reset_token::updateOrCreate(
            [
                'email' => $emailReset['emailReset'],
                'token' => $token,
            ]
        );




        return response('', 204);
    }
}

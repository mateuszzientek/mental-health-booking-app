<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailQuestionController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'name' => 'required|string|max:55',
            'surname' => 'required|string|max:55',
            'content' => 'required|string|max:150'
        ]);

        $emailData = [
            'recipient' => 'mentallwell@gmail.com',
            'email' => $request->email,
            'name' => $request->name,
            'surname' => $request->surname,
            'content' => $request->content,
        ];


        try {

            Mail::send("emails.emailQuestion", ['emailData' => $emailData], function ($message) use ($emailData) {
                $message->to($emailData['recipient'])
                    ->from($emailData['email'])
                    ->subject('Question from MentalWell');
            });
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }

        return response('', 204);
    }
}

<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PersonalDataRequest;

class ProfileController extends Controller
{
    public function changePersonalData(PersonalDataRequest $request)
    {

        $data = $request->validated();

        try {
            $user = Auth::user();

            $userRecord = User::findOrFail($user->id);

            return response()->json($userRecord);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }
}

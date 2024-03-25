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


            $userRecord->name = ucfirst(strtolower($data['name']));
            $userRecord->surname = ucfirst(strtolower($data['surname']));
            $userRecord->gender = $data['gender'];
            $userRecord->phoneNumber = $data['phoneNumber'];
            $userRecord->save();

            $newUser = [
                'id' => $userRecord->id,
                'email' => $userRecord->email,
                'name' => ucfirst(strtolower($data['name'])),
                'surname' => ucfirst(strtolower($data['surname'])),
                'gender' => $data['gender'],
                'phoneNumber' => $data['phoneNumber'],
            ];

            return response($newUser);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }
}

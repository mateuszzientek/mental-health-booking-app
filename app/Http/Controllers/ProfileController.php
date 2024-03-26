<?php

namespace App\Http\Controllers;

use App\Http\Requests\PasswordChangeRequest;
use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PersonalDataRequest;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function changePersonalData(PersonalDataRequest $request)
    {

        $data = $request->validated();

        try {
            $user = Auth::user();

            $userRecord = User::findOrFail($user->id);

            $dateOfBirth = $data['year'] . '-' . $data['month'] . '-' . $data['day'];

            $userRecord->name = ucfirst(strtolower($data['name']));
            $userRecord->surname = ucfirst(strtolower($data['surname']));
            $userRecord->gender = $data['gender'];
            $userRecord->phoneNumber = $data['phoneNumber'];
            $userRecord->dateOfBirth =  $dateOfBirth;
            $userRecord->save();

            $newUser = [
                'id' => $userRecord->id,
                'email' => $userRecord->email,
                'name' => ucfirst(strtolower($data['name'])),
                'surname' => ucfirst(strtolower($data['surname'])),
                'gender' => $data['gender'],
                'phoneNumber' => $data['phoneNumber'],
                'dateOfBirth' =>  $dateOfBirth
            ];

            return response($newUser);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }

    public function changePassword(PasswordChangeRequest $request)
    {
        $data = $request->validated();

        try {

            $user = Auth::user();

            $userRecord = User::findOrFail($user->id);

            if (!Hash::check($data['oldPassword'],  $userRecord->password)) {
                return response([
                    'message' => "Provided old password is incorrect"
                ], 422);
            }

            $userRecord->password = Hash::make($data['password']);
            $userRecord->save();

            return response('', 204);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }
}

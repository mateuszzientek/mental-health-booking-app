<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Specialist;
use Illuminate\Http\Request;

class SpecialistController extends Controller
{
    public function getSpecialist() {
       

        try{

         $specialists= Specialist::all();

         return response($specialists, 200);
         
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
       
    }
}

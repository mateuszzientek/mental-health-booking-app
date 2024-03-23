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

    public function getSingleSpecialist($id){

       if(!is_numeric($id)){
        return response()->json(['redirectMessage' => 'Id is not an number'], 200);
       }

        $specialist = Specialist::find($id);

        if(!$specialist){
           return response()->json(['redirectMessage' => 'Specialist not found'], 200);
        }

        return response()->json($specialist);

    }
}

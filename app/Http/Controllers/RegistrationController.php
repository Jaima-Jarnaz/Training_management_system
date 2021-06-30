<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Registration;

class RegistrationController extends Controller
{
    public function register(Request $request) {
        // return true/false based on validation
        $validator = Validator::make($request->all(), [
            'name'     => 'string',
            'email'    => 'required | string | email',
            'phone'    => 'string|max:20|min:10',
            'password' => 'required|string|min:8',
        ],[
            'email.required'=>'please enter your email',
            'password.required'=>'please enter your password',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' =>false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(), 
                
               
            ]);
        } 

            /// Hash the password
            //$password = Hash::make($request->password);

            //store the user
            $user = new Registration;
            $user->name=request('name');
            $user->email=request('email');
            $user->phone=request('phone');
            $user->password = Hash::make($request->password);
            //$user->password=request('password');
            $user->save();
            dd('entered');
            return response()->json(['status'=>200]);
    }


    public function login(Request $request)
    {

        $user = Registration::where('email',$request->email)->first();
       if(!$user || !Hash::check($request->password,$user->password))
       {
           return ['error'=> 'wrong credentials'];
       }
       return response()->json(['status'=>200,'user'=>$user]);
    }

}
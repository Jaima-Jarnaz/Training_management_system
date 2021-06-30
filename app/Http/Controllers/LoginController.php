<?php

namespace App\Http\Controllers;
use App\User;
//use APP\Auth;
//use App\Http\Controllers\Hash;
//use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth ;
use Illuminate\Support\Facades\Validator ;
//use Validator;

class LoginController extends Controller
{
    public function registration(Request $request)
        {
           $validation=Validator::make($request->all(),[
               'name'=>'required',
               'email'=>'required|email',
               'password'=>'required',
               'password_c'=>'required|same:password'
           ]);

           if($validation->fails()){
               return response()->json($validation->errors(),202);

           }
           $alldata=$request->all();
           $alldata['password']=bcrypt($alldata['password']);
           $user=User::create($alldata);

            $resArray=[];
            $resArray['token']=$user->createToken('api-application')->accessToken;
            $resArray['name']->$user->name;
            return response()->json($resArray,200);
           

        } 
        
        public function login(Request $request)
        {
            if(Auth::attempt([
                'email'=>$request->email,
                'password'=>$request->password
            ])){
                //$user=Auth::user();
                $user=  User::where('email', $request->email) -> first();

                //$user=User::
                $resArray=[];
                $resArray['token']=$user->createToken('api-application')->accessToken;
                $resArray['user']->$user;
                return response()->json($resArray,200);

            }else{
                return response()->json(['errors'=>'unauthoeized'],203);

            }
        }
}
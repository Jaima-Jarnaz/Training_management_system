<?php

namespace App\Http\Controllers;

use App\AuthModel;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    function login(){
        return view('signupPage');
    }

    function loginDone(){
        $loginData=new AuthModel;
        $loginData->firstname=request('firstname');
        $loginData->lastname=request('lastname');
        $loginData->age=request('age');
        $loginData->email=request('email');
        $loginData->phone=request('phone');
        $loginData->username=request('username');
        $loginData->save();
        return redirect('/welcome');
        

    }
}
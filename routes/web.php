<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;



// Route::get('/login','AuthController@login');
// Route::post('/loginDone','AuthController@loginDone');
// Route::view('/welcome','welcome');
// Route::view('/accessDenied','accessDenied');



Route::view('/','index');
Route::post('/student/create','StudentController@store');
Route::get('/student/studentlist','StudentController@getstudentlist');
Route::get('/studentupdate/{id}','StudentController@updateStudent');
Route::put('/studentupdate/{id}','StudentController@update');
Route::get('/studentdelete/{id}','StudentController@delete');


//course
Route::post('/add-course','CourseController@store');


//teachers
Route::post("/addteachers",'TeacherController@store');
Route::get("/teacherslist",'TeacherController@getAllTeachersData');
Route::get("/teachersdelete/{id}",'TeacherController@delete');
Route::get("/totalcount",'TeacherController@totalcount');


//Route::view('/{path?}', 'home')->where('path', '.*');

Route::post('/register','RegistrationController@register');
Route::post('/login','RegistrationController@login');
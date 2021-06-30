<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    function store(Request $request){
        $student = new Student();
        $student->name=request('name');
        $student->address=request('address');
        $student->phone=request('phone');
        $student->email=request('email');
        $student->courses=request('courses');
        $student->save();
        return  response()->json(['status'=>200]);

    }
    public function getstudentlist()
    {
        $students=Student::all();
        return response()->json(['status'=>200,'studentdata'=>$students]);
    }
    function updateStudent($id){
        $student=Student::find($id);
        return response()->json(['status'=>200,'editedData'=>$student]);
    }
    function update(Request $request,$id){
        $student = Student::find($id);
        $student->name=request('name');
        $student->address=request('address');
        $student->phone=request('phone');
        $student->email=request('email');
        $student->courses=request('courses');
        $student->save();
        return  response()->json(['status'=>200]);

    }
    public function delete($id)
    {
       $student=Student::find($id);
       $deleted_data=$student->delete();
       if($deleted_data){
           return response()->json(['status'=>200,'deleted_data'=>$deleted_data]);
       }
   
    }

}
<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function store(Request $request)
    {
        $teachers = new Teacher;
        $teachers->Teacher_Name=request('Teacher_Name');
        $teachers->Address=request('Address');
        $teachers->Phone=request('Phone');
        $teachers->Email=request('Email');
        $teachers->Assigned_Course=request('Assigned_Course');
        $teachers->save();
        return response()->json(['status'=>200,'teachersData'=>$teachers]);
    }
    public function getAllTeachersData()
    {
        $teachers=Teacher::all();
        return response()->json(['status'=>200,'teachersdata'=>$teachers]);
       
    }
    public function delete($id)
    {
       $teachers=Teacher::find($id);
       $deleted_data=$teachers->delete();
       if($deleted_data){
           return response()->json(['status'=>200,'deleted_data'=>$deleted_data]);
       }
    }

    public  function totalcount()
    {
        $students = DB::table('students')->count();
        $teachers = DB::table('teachers')->count();
        return response()->json(['totalstudent'=>$students,'totalteachers'=>$teachers]);
        
    }
}
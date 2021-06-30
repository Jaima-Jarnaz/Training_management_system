<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class CourseController extends Controller
{
    function store(Request $request){
        dd('data');
        $course = new Course;
        $course->coursename=request('courseName');
        $course->filepath=$request->file('filepath')->store('img');
        $course->description=request('description'); 
        $course->documentationlink=request('documentationlink');
        $course->save();
        
        return  response()->json(['status'=>200,'courseData'=>$course]);
        //  //return $request->file('img')->store('pics');
        //  $filename = $request->image->getClientOriginalName();
        //  $request->image->storeAs('uploadImages',$filename,'public');
        //$course->filepath=$request->img->storeAs('uploadImages','img.png','public');
        //$tem=\Storage::disk('public')->put($image_name,$image);
        //  return 'uploaded';




    }
}
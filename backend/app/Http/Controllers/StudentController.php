<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule as ValidationRule;

class StudentController extends Controller
{
    public function index(){

        $data = array("students" => DB::table('students')->orderBy('created_at', 'desc')->paginate(10));
        return view('students.index', $data);
    }

    public function create() {
        return view('students.create')->with('title', 'Add New');
    }

    public function show($id) {
        $data = Students::findOrFail($id);
        return view('students.edit', ["student" =>$data]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            "first_name" => ['required', 'min:4'],
            "last_name" => ['required', 'min:4'],
            "gender" => ['required'],
            "age" => ['required'],
            "email" => ['required', 'email', ValidationRule::unique('students', 'email')]   
        ]);

        Students::create($validated);

        return redirect('/')->with('message', 'New student was added successfully');
    }

    public function update(Request $request, Students $student){
        $validated = $request->validate([
            "first_name" => ['required', 'min:4'],
            "last_name" => ['required', 'min:4'],
            "gender" => ['required'],
            "age" => ['required'],
            "email" => ['required', 'email']   
        ]);
       if($student->update($validated)) {
            return redirect('/');
       }else {
            return back()->with('message', 'Data was successfully Updated!');
       }  
    }

    public function destroy(Students $student) {
        $student->delete();
        return redirect('/');
    }
}

//testing
//testing naten

 // $data = Students::all();
 // $data1 = Students::where("age", ">", 20)->orderBy('first_name', 'asc')->get();
 // dd($data);
 // $data2 = DB::table('students')
 // ->select(DB::raw('count(*) as gender_count, gender'))->groupBy('gender')->get();

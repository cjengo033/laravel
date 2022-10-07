<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    public function working() {
        return "API is working";
    }

    public function show(Request $request) {   
    $users = DB::table('students')->get();   
        return $users;
    }

    public function test($id) {
        $data = Students::findOrFail($id);
        return array($data);
    }
    
    public function create(Request $request){
        $message = "Successfully added a user";
        $first_name = $request->first_name;
        $last_name = $request->last_name;
        $gender = $request->gender;
        $age = $request->age;
        $email = $request->email;

        $array_user = array(
            "first_name" => $first_name,
            "last_name" => $last_name,
            "gender" => $gender,
            "age" => $age,
            "email" => $email
        );
        $user = DB::table('students')
                ->insertGetId($array_user);

        if ($user) {
            return array($message); 
        }
    }

    public function destroy(Request $request) {
        $message = "Successfully Deleted the data";
        $user = DB::table('students')
                    ->where('id', '=', $request->id)
                    ->delete();

                    $result = DB::table('students')
                    ->where('id', '=', $request->id)
                    ->get();
        if ($user) {
            return array($result, $message);
        }else {
            return false;
        }
    }

    public function edit(Request $request) {
        $message = "Successfully Edited";
        $user = DB::table('students')
                    ->where('id', '=', $request->id)
                    ->update(array("first_name" => $request->name));

        $result = DB::table('students')
                        ->where('id', '=', $request->id)
                        ->get();

        if ($user) {
            return array($result, $message);
        }else {
            return false;
        }
    }
}

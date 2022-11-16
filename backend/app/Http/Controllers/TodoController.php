<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    public function working()
    {
        return "API is working";
    }

    public function show(Request $request)
    {
        $users = DB::table('students')->get();
        return $users;
    }

    public function show_data($id)
    {

        if (Students::findOrFail($id)) {
            $user_data = Students::findOrFail($id);
            return response()->json([
                'Message' => 'Data has been found!',
                'Data' => array($user_data)
            ]);
        } else {
            return response()->json([
                'Message' => 'No data has been found!'
            ]);
        }
    }

    public function create(Request $request)
    {
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


        if (DB::table('students')->insert($array_user)) {
            return response()->json([
                'Message' => "You've created new user info!",
            ]);
        }else {
            return response()->json([
                'Message' => "Something went wrong"
            ]);
        }
    }

    public function destroy(Request $request)
    {
        $user = DB::table('students')
            ->where('id', '=', $request->id)
            ->delete();

        $result = DB::table('students')
            ->where('id', '=', $request->id)
            ->get();
        if ($user) {
            return response()->json([
                'Message' => "The data has been successfully deleted"
            ]);
        } else {
            return response()->json([
                'Message' => 'The data has not been successfully deleted'
            ]);
        }
    }

    public function edit(Request $request)
    {
       
        $user = DB::table('students')
            ->where('id', '=', $request->id)
            ->update(array(
                "first_name" => $request->first_name,
                "last_name" => $request->last_name,
                "age" => $request->age,
                "email" => $request->email
            ));

        $result = DB::table('students')
            ->where('id', '=', $request->id)
            ->get();

        if ($user) {
            // return array($result, $message);
            return response()->json([
                'message' => 'Successfully edit'
            ]);
        } else {
            return response()->json([
                'message' => 'Not Successfully edit'
            ]);
        }
    }
}

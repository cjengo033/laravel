<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BlogController extends Controller
{
    public function index()
    {
        $blog_data = DB::table('users')->get();

        if ($blog_data) {
            return $blog_data;
        } else {
            return false;
        }
    }

    public function show(Request $request)
    {
        $user_id = DB::table('users')
            ->find($request->id);
        if ($user_id) {
            return $user_id;
        } else {
            return false;
        }
    }

    public function create(Request $request)
    {
        if ($request->password == $request->old_password) {
            $user_data = DB::table('users')
                ->insert([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => $request->password
                ]);

            if ($user_data) {
                return $user_data;
            } else {
                return false;
            }
        } else {
            return "Password isn't match";
        }
    }
    public function destroy(Request $request)
    {
        $user_id = DB::table('users')
            ->where('id', '=', $request->id)
            ->delete();
        if ($user_id) {
            return "Data has been deleted";
        } else {
            return false;
        }
    }

    public function edit(Request $request, $data)
    {

        $get = User::where('id', $request->id)->first();

        if ($request->old_password == $get->password) {
            DB::table('users')
                ->where('id', '=', $request->id)
                ->update($request->all());

            return DB::table('users')
                ->where('id', '=', $request->id)
                ->get();
        } else {
            return "mali sila";
        }
    }

    public function showMe(Request $request)
    {
       $user_data =  User::where('name','like','%'.$request->name.'%')->get();
       if($user_data){
        return $user_data;
       }else {
        return "No Data has been found";
       }
    }

    public function register(Request $request) {
        $user_data = $request->validate([
            "name" => ['required', 'min:4'],
            "password" => ['required', 'min:4'],
            "email" => ['required', 'email'] 
        ]);

        $user = User::create($user_data);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
     }

     public function testToken(){
        return "Working api token";
     }

     public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();

        return [
            'message'=>'Logged out'
        ];
    }
}

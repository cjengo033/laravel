<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    public function login() {
        return ("Working");
    }

    public function register(Request $request) {
        $data = $request->validate([
            "name" => ['required', 'min:4'],
            "password" => ['required', 'min:4'],
            "email" => ['required', 'email', Rule::unique('students', 'email')],
        ]);

        if($data) {
            $array_user = array(
                "name" => $request->name,
                "password" => $request->password,
                "email" => $request->email
            );

            $user = DB::table('users')
            ->insertGetId($array_user);

            if($user) {
                return "Account has been registered!";
            }else {
                return "Account has not been register!";
            }

        }   
    }
}

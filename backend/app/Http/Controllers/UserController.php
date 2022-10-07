<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View as FacadesView;
use Illuminate\Validation\Rule as ValidationRule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\UserRequest;


class UserController extends Controller
{
    public function index() {
        return 'Hello from UserController';
    }

    public function login() {
        if(FacadesView::exists('user.login')){
            return view('user.login');
        }else {
            return abort(402);
        }    
    }

    public function process(Request $request) {
        $validated = $request->validate([
            "email" => ['required', 'email'],
            "password" => 'required'
        ]);

        if(auth()->attempt($validated)) {
            $request->session()->regenerate();
            return redirect('/')->with('message', 'Welcome back again user!');
        }

        return back()->withErrors(['email' => 'Login Failed'])->onlyInput('email');
    }

    public function register() {
        return view('user.register');
    }

    public function show($id) {

        return view('user')
                ->with('name', 'Carl Javier Engo')
                ->with('age', 22)
                ->with('email', 'engocarl03@gmail.com')
                ->with('id', $id);

    }

    public function store(Request $request) {
        $validated = $request->validate([
            "name" => ['required', 'min:4'],
            "email" => ['required', 'email', ValidationRule::unique('users', 'email')],
            'password' => ['required', Password::min(8)],     
        ]);

        $validated['password'] = bcrypt($validated['password']);

        $user = User::create($validated);

        auth()->login($user);
        return redirect('/login');
    }

    public function logout(Request $request) {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('message', 'Logout Successful');
    }

    public function student_settings($id) {
        $student_data = User::findOrFail($id);
        // dd($student_data);
        return view('user.settings', ["User" => $student_data]);
    }

    public function reset(Request $request) {
        $data = array();
        // validation
        if($request) {
            // hahanapin natin yung user, igeget natin yung data niya.
            $get = User::where('id', $request->id)->first();

            if( Hash::check($request->old_password, $get->password) ) {
                // succeess
                $data['password'] = Hash::make($request->new_password);
            }
        }

        if(User::where('id', $request->id)->update($data)){
            return "sAuccess gago";
        } else {
            return back();
        }
    }   

    ////////////////////////////////////////////////////////////////////////////////////////
    // Need to learn about Services & Repository:
    // https://dev.to/safbalili/implement-crud-with-laravel-service-repository-pattern-1dkl
    //
    // Files:
    // routes/api.php - routes ng mga api
    // app/models/User.php - Model (Parang table)
    // app/Requests/UserRequest.php - Validation
    // app/Http/Controller/UserController.php - Controller
    // app/Http/Middleware/VerifyCsrfToken.php - for accessing api
    ////////////////////////////////////////////////////////////////////////////////////////

    // Yung UserRequest, nasa App/Http/Requests/UserRequests 
    // or check mo yung line 12
    
    public function testing_api(UserRequest $request) {
        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        );
        User::create($data);
        return "Successfully!";
    }
    public function testing_api_get(Request $request) {
        $get = User::where('id', '=', $request->id)->first();
        return $get;
    }
    public function testing_api_get_all() {
        $get = User::get();
        return $get;
    }
    public function testing_api_delete(Request $request) {
        $get = User::where('id', '=', $request->id)->delete();
        return $get;
    }
    public function testing_api_update(Request $request) {
        $data['name'] = $request->name;
        $get = User::where('id', '=', $request->id)->update($data);
        return $get;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
}

 // $validated['password'] = Hash::make($validated['password']);
 // return view('user', ["data" => $data]); //for json view
  // $data = array(
        //     "id" => $id,
        //     "name" => "Carl Javier Engo",
        //     "age" => 22,
        //     "email" => "engocarl03@gmail.com"
        // );
 // return response()->view('errors.404'); //customize error page if the page is not found

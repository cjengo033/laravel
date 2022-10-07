<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Common routes naming
//Index - show all data students
//show  -  show a single data per student
//create - show a create form to add a new student
//store - store a data
//edit - show a form to edit a data
//destroy - delete a data

Route::get('/', [StudentController::class, 'index'])->middleware('auth');
Route::get('/login', [UserController::class, 'login'])->name('login')->middleware('guest');
Route::post('/login/process', [UserController::class, 'process']);
Route::get('/register', [UserController::class, 'register']);
Route::post('/store', [UserController::class, 'store']);
Route::post('/logout', [UserController::class, 'logout']);

Route::post('/student/settings/process/{id}', [UserController::class, 'reset']);


Route::prefix('settings')->group(function() {
    Route::get('/student/{id}', [UserController::class, 'student_settings']);
    Route::post('/student/{id}', [UserController::class, 'reset']);
    Route::post('/testing_api', [UserController::class, 'testing_api']);
});



Route::controller(StudentController::class)->group(function(){
    Route::get('/add/student', 'create');
    Route::post('/add/student', 'store');
    Route::get('student/{student}', 'show');
    Route::put('student/{student}', 'update');
    Route::delete('student/{student}', 'destroy');
});

// Route::get('/users', [UserController::class, 'index']);

// Route::get('/user/{id}', [UserController::class, 'create']);



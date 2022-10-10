<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Common routes naming
//Index - show all data students
//show  -  show a single data per student
//create - show a create form to add a new student
//store - store a data
//edit - show a form to edit a data
//destroy - delete a data

Route::prefix('settings')->group(function() {
    Route::get('/', function() {
        return 'API is working!';
    });
    Route::post('/testing_api', [UserController::class, 'testing_api']);
    Route::get('/testing_api/{id}', [UserController::class, 'testing_api_get']);
    Route::get('/testing_api', [UserController::class, 'testing_api_get_all']);
    Route::delete('/testing_api/{id}', [UserController::class, 'testing_api_delete']);
    Route::get('/testing_api/{id}/restore', [UserController::class, 'testing_api_restore']);
    Route::post('/testing_api/{id}/update', [UserController::class, 'testing_api_update']);
});

Route::prefix('todo')->group(function(){
    Route::get('/', [TodoController::class, 'working']);
    Route::get('/show', [TodoController::class, 'show']);
    Route::get('/{id}', [TodoController::class, 'test']);  
    Route::post('/add', [TodoController::class, 'create']);
    Route::delete('/del/{id}', [TodoController::class, 'destroy']);
    Route::post('/update/{id}', [TodoController::class, 'edit']);

});

Route::prefix('authentication')->group(function(){
    Route::get('/login', [UsersController::class, 'login']);
    Route::post('/register', [UsersController::class, 'register']);
});

Route::prefix('blog')->group(function(){
    route::get('/', [BlogController::class, 'index']);
    route::get('/show', [BlogController::class, 'showMe']);
    route::get('/{id}', [BlogController::class, 'show']);
    route::post('/add', [BlogController::class, 'create']);
    route::delete('/del/{id}', [BlogController::class, 'destroy']);
    route::post('/update/{id}', [BlogController::class, 'edit']);
    route::get('/show', [BlogController::class, 'showMe']);
    route::get('/show', [BlogController::class, 'showMe']);
});

Route::prefix('credential')->group(function(){
    route::post('/register', [BlogController::class, 'register']);
});




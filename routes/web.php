<?php

use App\Products;
use App\shops;
use App\Slider;
use Illuminate\Support\Facades\Route;

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

Route::get('23423423423426567',function(){
    return Products::all();
});

Route::get('23423423423426568',function(){
    return shops::all();
});

Route::get('23423423423426569',function(){
    return Slider::all();
});
Route::view('/{path?}','welcome');


<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard
Route::get('/', function(){
  return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/usuarios', [UsersController::class, 'index'])->name('users');

<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/info', function () {
  return view('welcome');
});

// Dashboard
Route::get('/', function () {
  return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/usuarios', [UsersController::class, 'index'])->name('users');

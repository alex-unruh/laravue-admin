<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\CategoriesController;

Route::get('/info', function () {
  return view('welcome');
});

// Dashboard
Route::get('/', function () {
  return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/users', [UsersController::class, 'index'])->name('users');
Route::get('/media', [MediaController::class, 'index'])->name('media');
Route::get('/categories', [CategoriesController::class, 'index'])->name('categories');
Route::get('/posts', [PostsController::class, 'index'])->name('posts');
Route::get('/settings', [SettingsController::class, 'index'])->name('settings');
Route::post('/settings', [SettingsController::class, 'store'])->name('settings.store');
Route::post('/change-logo', [SettingsController::class, 'changeLogo'])->name('change.logo');

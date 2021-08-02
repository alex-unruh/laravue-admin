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

// Users
Route::get('/users', [UsersController::class, 'index'])->name('users');
Route::post('/users/store', [UsersController::class, 'store'])->name('users.store');
Route::post('/users/update/{user}', [UsersController::class, 'update'])->name('users.update');
Route::post('/users/delete/{user}', [UsersController::class, 'destroy'])->name('users.delete');
Route::post('/users/delete-multiple', [UsersController::class, 'multipleDestroy'])->name('users.delete-multiple');

// Categories
Route::get('/categories', [CategoriesController::class, 'index'])->name('categories');
Route::post('/categories/get-slug', [CategoriesController::class, 'getSlug'])->name('categories.get-slug');
Route::post('/categories/store', [CategoriesController::class, 'store'])->name('categories.store');
Route::post('/categories/update/{category}', [CategoriesController::class, 'update'])->name('categories.update');
Route::post('/categories/delete/{category}', [CategoriesController::class, 'destroy'])->name('categories.delete');
Route::post('/categories/delete-multiple', [CategoriesController::class, 'multipleDestroy'])->name('categories.delete-multiple');

// Posts
Route::get('/posts', [PostsController::class, 'index'])->name('posts');
Route::get('/create', [PostsController::class, 'create'])->name('posts.create');
Route::post('/posts/get-slug', [PostsController::class, 'getSlug'])->name('posts.get-slug');

// Settings
Route::get('/settings', [SettingsController::class, 'index'])->name('settings');
Route::post('/settings', [SettingsController::class, 'store'])->name('settings.store');
Route::post('/change-logo', [SettingsController::class, 'changeLogo'])->name('change.logo');

Route::get('/media', [MediaController::class, 'index'])->name('media');



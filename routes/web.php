<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard
Route::get('/', function(){
  return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/usuarios', function(){
  return Inertia::render('Users', ['pageInfo' => ['target' => 'users', 'label' => 'Usuários']]);
})->name('users');

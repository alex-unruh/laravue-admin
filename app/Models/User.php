<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile',
        'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Undocumented function
     *
     * @param [type] $password
     * @return void
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

    /**
     * Undocumented function
     *
     * @param [type] $profile
     * @return void
     */
    public function setProfileAttribute($profile)
    {
        $profiles = config('labels.user_profiles');
        $this->attributes['profile'] = array_search($profile, $profiles);
    }

    /**
     * Undocumented function
     *
     * @param [type] $profile
     * @return void
     */
    public function getProfileAttribute($profile)
    {
        $profiles = config('labels.user_profiles');
        return $profiles[$profile];
    }
}

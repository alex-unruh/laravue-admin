<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ["name", "slug", "parent", "description"];

    /**
     * Undocumented function
     *
     * @param [type] $value
     * @return void
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-');
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function mother()
    {
        return $this->hasOne('App\Models\Category', 'id', 'parent');
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function posts()
    {
        return $this->belongsToMany('App\Models\Posts');
    }

    /**
     * Undocumented function
     *
     * @param [type] $image
     * @return void
     */
    public function getImageAttribute($image)
    {
        if($image && !empty($image) && file_exists('storage/' . $image)){
            return 'storage/' . $image;
        }

        return 'images/user.png';
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    public static function getData()
    {
      $res = [];
      $settings = self::select('key', 'value')->get();
      foreach($settings as $setting){
        $res[$setting['key']] = $setting['value'];
      }

      return $res;
    }
}

<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('settings', function (Blueprint $table) {
      $table->id();
      $table->string('key');
      $table->string('value');
      $table->timestamps();
    });

    $this->populate();
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('config');
  }

  /**
   * Undocumented function
   *
   * @return void
   */
  private function populate()
  {
    $settings_default = config("settings");

    foreach($settings_default as $key => $val){
      $setting = new Setting();
      $setting->key = $key;
      $setting->value = $val;
      $setting->save();
    }
  }
}

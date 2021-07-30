<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\WithImages;
use Inertia\Inertia;
use App\Models\Setting;
use Illuminate\Http\Request;

/**
 * Undocumented class
 */
class SettingsController extends Controller
{

    use WithImages;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Settings');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $setting = Setting::where('key', $request->key)->first();
        $setting->value = $request->value;
        $setting->save();

        return redirect()->back();
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function changeLogo(Request $request)
    {
        $setting = Setting::where('key', 'admin_logo')->first();
        $this->deleteImage($setting->value);
        $image_name = $this->storeImage($request->file('logo'));
        $setting->value = $image_name;
        $setting->save();
        return redirect()->back();
    }
}

<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Inertia\Middleware;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $settings = Setting::getData();
        $settings['app_name'] = env('APP_NAME', 'Laravue Admin');
        $settings['app_version'] = env('APP_VERSION', '0.1.0');

        return array_merge(parent::share($request), [
            'settings' => $settings,
            'flash' => [
                'data' => function () use ($request) {
                    return $request->session()->get('data');
                }
            ],
        ]);
    }
}

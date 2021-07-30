<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UsersRequest;
use App\Http\Controllers\Traits\WithImages;

/**
 * Undocumented class
 */
class UsersController extends Controller
{

    use WithImages;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['users'] = User::select('id', 'name', 'email', 'profile', 'image')->get();
        return Inertia::render('Users', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UsersRequest $request)
    {
        $form = $request->validated();
        $user = new User();
        $user->fill($form);
        if ($request->file('image_file')) {
            $image_name = $this->storeImage($request->file('image_file'));
            $user->image = $image_name;
        }
        $user->save();
        return redirect()->back()->with('success', 'Successfully registered user!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UsersRequest $request, User $user)
    {
        $form = $request->validated();
        $user->fill($form);
        if ($request->file('image_file')) {
            $this->deleteImage($user->image);
            $image_name = $this->storeImage($request->file('image_file'));
            $user->image = $image_name;
        }
        $user->save();
        return redirect()->back()->with('success', 'Successfully registered user!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->delete($id);
        return redirect()->back()->with('success', 'Successfully deleted user!');
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function multipleDestroy(Request $request)
    {
        $ids = $request->ids;
        foreach ($ids as $id) {
            $this->delete($id);
        }
        return redirect()->back()->with('success', 'Successfully deleted users!');
    }

    /**
     * Undocumented function
     *
     * @param [type] $id
     * @return void
     */
    private function delete($id)
    {
        $user = User::find($id);
        if ($user->image) {
            $file_name = str_replace('storage/', 'public/', $user->image);
            $this->deleteImage($file_name);
        }
        $user->delete();
    }
}

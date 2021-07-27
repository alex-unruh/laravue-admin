<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CategoriesRequest;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['categories'] = Category::select('id', 'name', 'slug', 'parent', 'description', 'image')->get();
        return Inertia::render('Categories', $data);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoriesRequest $request)
    {
        $form = $request->validated();
        $category = new Category();
        $category->fill($form);
        if ($request->file('image_file')) {
            $path = $request->file('image_file')->store('public');
            $category->image = str_replace('public/', '', $path);
        }

        $category->save();
        return redirect()->back()->with('success', 'Successfully registered category!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoriesRequest $request, Category $category)
    {
        $form = $request->validated();

        $category->fill($form);
        if ($request->file('image_file')) {
            Storage::delete('public/' . $category->image);
            $path = $request->file('image_file')->store('public');
            $category->image = str_replace('public/', '', $path);
        }

        $category->save();
        return redirect()->back()->with('success', 'Successfully registered category!');
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
        return redirect()->back()->with('success', 'Successfully deleted category!');
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
        return redirect()->back()->with('success', 'Successfully deleted categories!');
    }

    /**
     * Undocumented function
     *
     * @param [type] $id
     * @return void
     */
    private function delete($id)
    {
        $category = Category::find($id);
        if ($category->image) {
            $file_name = str_replace('storage/', 'public/', $category->image);
            Storage::delete($file_name);
        }
        $category->delete();
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function getSlug(Request $request)
    {
        $slug = Str::slug($request->name, '-');
        $increment = 1;
        while (Category::where('slug', $slug)->get()->count() > 0) {
            $slug .= '-' . $increment;
        }

        return redirect()->back()->with('data', $slug);
    }
}

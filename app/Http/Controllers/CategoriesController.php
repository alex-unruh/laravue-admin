<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\WithImages;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\CategoriesRequest;

class CategoriesController extends Controller
{

    use WithImages;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['categories'] = Category::select('id', 'name', 'slug', 'description', 'image')->get();
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
        $category->parent = $form['parent'] ?? 1;

        if ($request->file('image_file')) {
            $image_name = $this->storeImage($request->file('image_file'));
            $category->image = $image_name;
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
            $this->deleteImage($category->image);
            $image_name = $this->storeImage($request->file('image_file'));
            $category->image = $image_name;
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
        if ((int)$id === 1) {
            return;
        }
        $category = Category::find($id);
        if ($category->image) {
            $file_name = str_replace('storage/', 'public/', $category->image);
            $this->deleteImage($file_name);
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
        while (Category::where('id', '!=', $request->id)->where('slug', $slug)->get()->count() > 0) {
            $slug .= '-' . $increment;
        }

        return redirect()->back()->with('data', $slug);
    }
}

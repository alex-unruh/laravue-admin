<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\PostsRequest;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['posts'] = Post::select('id', 'title', 'slug', 'excerpt', 'image', 'author')->get();
        return Inertia::render('posts/List');
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function create()
    {
        $data['categories'] = Category::select('id', 'name')->get();
        return Inertia::render('posts/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostsRequest $request)
    {
        $form = $request->validated();
        $post = new Post();
        $post->fill($form);
        $post->parent = $form['parent'] ?? 1;
        if ($request->file('image_file')) {
            $image_name = $this->storeImage($request->file('image_file'));
            $post->image = $image_name;
        }
        $post->save();
        return redirect()->back()->with('success', 'Successfully registered Post!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostsRequest $request, Post $post)
    {
        $form = $request->validated();

        $post->fill($form);
        if ($request->file('image_file')) {
            $this->deleteImage($post->image);
            $image_name = $this->storeImage($request->file('image_file'));
            $post->image = $image_name;
        }
        $post->save();
        return redirect()->back()->with('success', 'Successfully registered Post!');
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
        return redirect()->back()->with('success', 'Successfully deleted Post!');
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
        $post = Post::find($id);
        if ($post->image) {
            $file_name = str_replace('storage/', 'public/', $post->image);
            $this->deleteImage($file_name);
        }
        $post->delete();
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
        while (Post::where('id', '!=', $request->id)->where('slug', $slug)->get()->count() > 0) {
            $slug .= '-' . $increment;
        }
        return redirect()->back()->with('data', $slug);
    }
}

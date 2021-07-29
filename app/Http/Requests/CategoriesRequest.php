<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CategoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required|string|between:3,50',
            'slug'        => ['required', 'string', Rule::unique('categories', 'slug')->ignore($this->id)],
            'parent'      => 'nullable|exists:categories,id',
            'description' => 'nullable|string|between:5,255',
            'image_file'  => 'nullable|image|file|dimensions:max_width=1920,max_height=1080'
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
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
            'name'       => 'required|string|between:3,100',
            'email'      => ['required', 'email', Rule::unique('users')->ignore($this->id)],
            'password'   => 'nullable|between:6,30',
            'profile'    => ['required', Rule::in(config('labels.user_profiles'))],
            'image_file' => 'nullable|image|file'
        ];
    }
}

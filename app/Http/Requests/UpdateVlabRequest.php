<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Vlab;

class UpdateVlabRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $vlab = $this->route('vlab');
        if ($this->user()->id !== $vlab->user_id) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:1000',
            'image' => 'nullable|string',
            'status' => 'required|string',
            'user_id' => 'exists:users, id',
            'lab' => 'nullable|string',
            'description' => 'nullable|string',
        ];
    }
}

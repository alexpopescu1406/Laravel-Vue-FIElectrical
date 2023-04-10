<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use App\Models\Event;

class StoreEventRequest extends FormRequest
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

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id
        ]);
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
            'user_id' => 'exists:users,id',
            'date' => 'required|date',
            'location' => 'required|string',
            'maplocation' => 'required|string',
            'longdescription' => 'nullable|string',
            'credits' => 'string',
            'instructors' => 'array',
            'type' => 'required|string|max:1000',
            'description' => 'nullable|string',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Event;

class UpdateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $event = $this->route('event');
        if ($this->user()->id !== $event->user_id) {
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
            'credits' => 'string',
            'status' => 'required|string',
            'date' => 'required|date',
            'location' => 'required|string',
            'maplocation' => 'required|string',
            'longdescription' => 'nullable|string',
            'type' => 'required|string',
            'user_id' => 'exists:users, id',
            'description' => 'nullable|string',
        ];
    }
}

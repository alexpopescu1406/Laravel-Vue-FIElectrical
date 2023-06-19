<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'image_url' => $this->image ? URL::to($this->image) : null,
            'title' => $this->title,
            'type' => $this->type,
            'status' => $this->status,
            'location' => $this->location,
            'maplocation' => $this->maplocation,
            'date' => $this->date,
            'credits' => $this->credits,
            'slug' => $this->slug,
            'description' => $this->description,
            'language' => $this->language,
            'longdescription' => $this->longdescription,
            'updated_at' => $this->updated_at,
        ];
    }
}

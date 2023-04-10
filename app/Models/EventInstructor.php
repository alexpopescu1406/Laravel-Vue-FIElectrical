<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventInstructor extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'type', 'instructor', 'description', 'data', 'event_id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\SlugOptions;
use Spatie\Sluggable\HasSlug;

class Blog extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = ['user_id', 'image', 'dateday', 'datemonth', 'title', 'slug', 'status', 'description', 'expire_date'];

    public function getSlugOptions(): SlugOptions
    {
       return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
}

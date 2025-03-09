<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Post extends Model
{
    protected $appends = ['formatted_created_at'];
    protected $fillable = [
        'user_id',
        'title',
        'content'
    ];

    public function user() {
        return $this->belongsTo(User::Class);
    }

    public function getFormattedCreatedAtAttribute() {
        return Carbon::parse($this->created_at)->diffForHumans();
    }
}

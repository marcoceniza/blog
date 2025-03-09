<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'password'
    ];
}

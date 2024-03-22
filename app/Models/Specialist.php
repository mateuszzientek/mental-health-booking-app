<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'descriptionShort',
        'descriptionLong',
        'gender',
        'age',
        'quantity_appointments',
        'specializations',
        'languages',
        'experience',
        'avatar',
    ];

    protected $casts = [
        'specializations' => 'array',
        'languages' => 'array',
    ];
}

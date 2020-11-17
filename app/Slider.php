<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $table ='sliders';

    public $primarykey='id';

    public $timestamp = true;
}

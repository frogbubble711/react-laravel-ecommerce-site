<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table ='products';

    public $primarykey='id';

    public $timestamp = true;
}

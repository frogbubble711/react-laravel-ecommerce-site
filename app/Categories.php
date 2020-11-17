<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table="categories";

    public $primary_key="id";

    public $timestamp=true;

}

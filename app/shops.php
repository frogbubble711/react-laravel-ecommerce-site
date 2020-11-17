<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class shops extends Model
{
     protected $table ='shops';

     public $primarykey='id';
 
     public $timestamp = true;
}

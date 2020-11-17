<?php

use App\shop;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');            
            $table->string('product_description');            
            $table->string('product_price');
            $table->string('product_image');            
            $table->integer('product_review');
            $table->string('product_keyword');
            $table->integer('category_id')->unsigned()->references('id')->on('categories');
            $table->integer('shop_id')->unsigned()->references('id')->on('shop');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

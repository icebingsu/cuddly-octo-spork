<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslationsHistoryTable extends Migration
{
    public function up()
    {
        Schema::create('translations_history', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ip_address', 45);
            $table->text('original_text');
            $table->text('translated_text');
            $table->string('source_language_id', 10); 
            $table->string('target_language_id', 10); 
            $table->string('status')->default('in_progress'); 
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('translations_history');
    }
}

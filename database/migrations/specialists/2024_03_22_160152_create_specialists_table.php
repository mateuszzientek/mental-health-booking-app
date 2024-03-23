<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('specialists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('descriptionShort');
            $table->string('descriptionLong');
            $table->string('gender');
            $table->string('age');
            $table->string('avatar');
            $table->unsignedInteger('quantity_appointments');
            $table->json('specializations');
            $table->json('languages');
            $table->string('experience');
            $table->timestamps(); 
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('specialists');
    }
};

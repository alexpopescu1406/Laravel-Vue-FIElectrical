<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class, 'user_id');
            $table->string('title', 1000);
            $table->string('type', 1000);
            $table->string('location', 1000);
            $table->string('maplocation', 1000);
            $table->date('date');
            $table->string('slug', 1000);
            $table->string('status', 1000);
            $table->text('description')->nullable();
            $table->text('longdescription')->nullable();
            $table->string('language', 1000);
            $table->text('credits')->nullable();
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
        Schema::dropIfExists('events');
    }
};

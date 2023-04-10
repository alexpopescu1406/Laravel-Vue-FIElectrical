<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventInstructorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_instructors', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('type', 45);
            $table->string('instructor',2000);
            $table->longText('description', 2000);
            $table->foreignIdFor(\App\Models\Event::class, 'event_id');
            $table->longText('data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_instructors');
    }
};

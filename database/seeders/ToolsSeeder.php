<?php

namespace Database\Seeders;

use App\Models\Tool;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ToolsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tools = [
            [
                'title' => 'Parallel Resistor Calculator',
                'user_id' => '1',
                'description' => 'Calculate the equivalent resistance of up to six resistors in parallel with ease while learning how to calculate resistance in parallel and the parallel resistance formula.',
                'image' => 'images/S4GqAmyqi6uz3qzI.webp',
                'formula' => 'Parallel Resistor'
            ],
            [
                'title' => 'Wheatstone Bridge Calculator',
                'user_id' => '1',
                'description' => 'This calculator helps determine the resistance of a variable resistor within a Wheatstone bridge circuit or the differential voltage created across the bridge terminals.',
                'image' => 'images/QBw5Dii8svWfISrY.webp',
                'formula' => 'Wheatstone Bridge'
            ],
            [
                'title' => 'Lenz’s Law and Faraday’s Law Calculator',
                'user_id' => '1',
                'description' => 'This calculator uses Faradays and Lenzs laws to calculate the magnitude and polarity of the induced electromotive force (EMF) caused by a change in magnetic flux through a closed-loop coil.',
                'image' => 'images/5wRFnQharHBMdLLX.webp',
                'formula' => 'Faraday Lenz Law'
            ],
            [
                'title' => 'Pressure Unit Conversion Calculator',
                'user_id' => '1',
                'description' => 'This calculator will convert pressure values to ten different standard units for pressure.',
                'image' => 'images/cbrdh91dmSUVhr2g.webp',
                'formula' => 'Pressure Unit'
            ],
            [
                'title' => 'Electrical Energy Calculator',
                'user_id' => '1',
                'description' => 'This calculator will determine the instantaneous energy, sustained energy, and power consumed by an electrical system given two of the three electrical parameters (voltage, current, or resistance) and the time.',
                'image' => 'images/aM0sYO5YssJXZGAo.webp',
                'formula' => 'Energy Calculator'
            ],

        ];

        foreach ($tools as $tool) {
            Tool::updateOrCreate([
                'title' => $tool['title'],
            ],
                collect($tool)->only('user_id', 'formula', 'description', 'image')->toArray()
            );
        }
    }
}


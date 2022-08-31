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
            ]
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


<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Specialist;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Specialist::create([
            'name' => 'Oliver Smith',
            'descriptionShort' => 'Passionate psychologist empowering others to overcome challenges.',
            'descriptionLong' => 'Long description 1',
            'gender' => 'Male',
            'age' => '35',
            'quantity_appointments' => 40,
            'specializations' => ['Trauma therapist', 'Addiction counselor', 'Sex therapist' , 'Anxiety disorder therapist'],
            'languages' => ['English', 'Polish' , 'Spanish'],
            'experience' => '5',
            'avatar' => 'specialist1'
        ]);
        Specialist::create([
            'name' => 'Emma Williams',
            'descriptionShort' => 'Experienced psychiatrist dedicated to patient well-being.',
            'descriptionLong' => 'Long description 1',
            'gender' => 'Female',
            'age' => '43',
            'quantity_appointments' => 140,
            'specializations' => ['Career counselor', 'Eating disorder therapist', 'Sex therapist' , 'Family therapist'],
            'languages' => ['English', 'German'],
            'experience' => '8',
            'avatar' => 'specialist3'
        ]);

        Specialist::create([
            'name' => 'Ethan Johnson',
            'descriptionShort' => 'Cognitive-behavioral therapist creating a safe space for growth..',
            'descriptionLong' => 'Long description 1',
            'gender' => 'Male',
            'age' => '32',
            'quantity_appointments' => 60,
            'specializations' => ['Trauma therapist', 'Child therapist', 'Couples therapist' , 'Music therapist'],
            'languages' => ['English', 'Russian' , 'Spanish'],
            'experience' => '4',
            'avatar' => 'specialist2'
        ]);

        Specialist::create([
            'name' => 'Sophia Brown',
            'descriptionShort' => 'Psychotherapist guiding individuals to achieve their potential.',
            'descriptionLong' => 'Long description 1',
            'gender' => 'Female',
            'age' => '38',
            'quantity_appointments' => 100,
            'specializations' => ['Neuropsychologist', 'Rehabilitation psychologist', 'Trauma therapist' , 'Adult therapist'],
            'languages' => ['English'],
            'experience' => '7',
            'avatar' => 'specialist4'
        ]);


    }
}

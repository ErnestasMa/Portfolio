<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    public function getWeatherForCity($city): string
    {
        return 'weather for: ' . $city;
    }


}

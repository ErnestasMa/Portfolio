<?php

namespace App\Http\Controllers;

use App\Http\Models\Weather;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    protected $model;

    public function __construct()
    {
        $this->model = New Weather();
    }


    public function getWeather($city) {

        $return = $this->model->getWeatherForCity($city);
        dd($return);

    }

}

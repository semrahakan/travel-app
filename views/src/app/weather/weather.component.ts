import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weatherService";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: {'code': string,'name': string, 'rain': string, 'snow': string, 'temp': {'temp': string, 'temp_max': string}, 'desc': string} = {'code': '','name': '', 'rain': '', 'snow': '', 'temp': {'temp': '', 'temp_max': ''}, 'desc': '' };
  error: string = '';

  constructor(private weatherService: WeatherService) {
    this.weatherService.getCityWeather('Amsterdam')
      .subscribe(
        weather => {
          this.weatherData.name = weather.name
          this.weatherData.rain = weather.rain
          this.weatherData.code = weather.code
          this.weatherData.snow = weather.snow
          this.weatherData.temp = weather.temp
          this.weatherData.desc = weather.desc
        }, error => {
          this.error = error.message;
        }
      )
  }


}

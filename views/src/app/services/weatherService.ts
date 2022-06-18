import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Weather} from "../model/weatherInterface";
import {map, tap} from "rxjs";

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(private http: HttpClient) {
  }
// http://api.openweathermap.org/data/2.5/find?q=amsterdam&units=metric&type=accurate&mode=json&APPID=779951f3a709e98b4110c7c4b4263f89
  getCityWeather(city: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('appid', '779951f3a709e98b4110c7c4b4263f89');
    searchParams = searchParams.append('type', "accurate");
    searchParams = searchParams.append('units', "metric");
    searchParams = searchParams.append('q', city);
    searchParams = searchParams.append('mode', 'json');

    return this.http.get<Weather>(
      'http://api.openweathermap.org/data/2.5/find',
      {
        params: searchParams,
        responseType: 'json'
      }
    ).pipe(
      map( weatherData => {
        console.log(weatherData)
      return {
        'code': weatherData.cod,
        'name': weatherData.list[0].name,
        'rain': weatherData.list[0].rain,
        'snow': weatherData.list[0].snow,
        'temp': weatherData.list[0].main,
        'desc': weatherData.list[0].weather[0].description
        }
      })
    );
  }
}

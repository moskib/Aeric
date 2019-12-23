import { Injectable } from '@angular/core';
import { AutoComplete, TwelveHourForecast, FiveDayForecast } from './fake-api'
import { DayWeatherForecast, HourWeatherForecast } from 'app/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getHourlyForecast(): HourWeatherForecast[] {
    return TwelveHourForecast.map(el => ({
      time: new Date(el.DateTime),
      icon: el.WeatherIcon,
      temperature: el.Temperature.Value
    }
    )).slice(0, 5);
  }

  getFiveDayForecast() {
    console.log(FiveDayForecast);
  }

  getSearchAutoCompolete() {
    console.log(AutoComplete)
  }
}

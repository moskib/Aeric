import { Injectable } from '@angular/core';
import { AutoComplete, TwelveHourForecast, FiveDayForecast } from './fake-api';
import { DayWeatherForecast, HourWeatherForecast } from 'app/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getHourlyForecast(): HourWeatherForecast[] {
    return TwelveHourForecast.map(el => ({
      Time: new Date(el.DateTime),
      Icon: el.WeatherIcon,
      Temperature: el.Temperature.Value
    }
    )).slice(0, 5);
  }

  getFiveDayForecast(): DayWeatherForecast[] {
    return FiveDayForecast.DailyForecasts
      .map(el => (
        {
          Date: new Date(el.Date),
          Icon: el.Day.Icon,
          MinTemp: el.Temperature.Minimum.Value,
          MaxTemp: el.Temperature.Maximum.Value
        }
      ));
  }
}

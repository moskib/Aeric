import { Injectable } from '@angular/core';
import { DayWeatherForecast, HourWeatherForecast } from 'app/models/weather.model';
import { FiveDayForecast, TwelveHourForecast } from './fake-api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  fiveHourForecast: BehaviorSubject<HourWeatherForecast[]> = new BehaviorSubject<HourWeatherForecast[]>([]);
  weekForecast: BehaviorSubject<DayWeatherForecast[]> = new BehaviorSubject<DayWeatherForecast[]>([]);

  constructor() {
    this.getHourlyForecast();
    this.getFiveDayForecast();
  }

  getHourlyForecast(): HourWeatherForecast[] {

    const hourlyForecast = TwelveHourForecast.map(el => ({
      Time: new Date(el.DateTime),
      Icon: el.WeatherIcon,
      Temperature: el.Temperature.Value
    }
    )).slice(0, 5); // only take the first 5

    this.fiveHourForecast.next(hourlyForecast);

    return hourlyForecast;
  }

  getFiveDayForecast(): DayWeatherForecast[] {
    const fiveDayForecast: DayWeatherForecast[] = FiveDayForecast.DailyForecasts
      .map(el => (
        {
          Date: new Date(el.Date),
          Icon: el.Day.Icon,
          MinTemp: el.Temperature.Minimum.Value,
          MaxTemp: el.Temperature.Maximum.Value
        }
      ));

    this.weekForecast.next(fiveDayForecast);
    return fiveDayForecast;
  }
}

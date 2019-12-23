import { Injectable } from '@angular/core';
import { AutoComplete, TwelveHourForecast, FiveDayForecast } from './fake-api'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor() { }

  getHourlyForecast() {
    console.log(TwelveHourForecast);
  }

  getFiveDayForecast() {
    console.log(FiveDayForecast);
  }

  getSearchAutoCompolete() {
    console.log(AutoComplete)
  }
}

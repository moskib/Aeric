import { Injectable } from "@angular/core";
import {
  DayWeatherForecast,
  HourWeatherForecast
} from "app/models/weather.model";
import { FiveDayForecast, TwelveHourForecast } from "./fake-api";
import { BehaviorSubject, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import { LocationService } from "./location.service";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  fiveHourForecast: BehaviorSubject<
    HourWeatherForecast[]
  > = new BehaviorSubject<HourWeatherForecast[]>([]);
  weekForecast: BehaviorSubject<DayWeatherForecast[]> = new BehaviorSubject<
    DayWeatherForecast[]
  >([]);

  baseUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  endpoints = {
    fiveDaysDailyForecasts: "forecasts/v1/daily/5day/",
    hourlyForecasts: "forecasts/v1/hourly/12hour/"
  };

  constructor(
    private http: HttpClient,
    private locationService: LocationService
  ) {
    this.getHourlyForecast().subscribe();
    this.getFiveDayForecast().subscribe();
  }

  getHourlyForecast(locationKey = null): Observable<HourWeatherForecast[]> {
    const url =
      this.baseUrl +
      this.endpoints.hourlyForecasts +
      (locationKey || this.locationService.currentLocation.getValue().Key) +
      `?apikey=${this.apiKey}&metric=true`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const result = res
          .map((el: any) => ({
            Time: new Date(el.DateTime),
            Icon: el.WeatherIcon,
            Temperature: el.Temperature.Value
          }))
          .slice(0, 5);
        this.fiveHourForecast.next(result);
        return result;
      })
    );
  }

  getFiveDayForecast(locationKey = null): Observable<DayWeatherForecast[]> {
    const url =
      this.baseUrl +
      this.endpoints.fiveDaysDailyForecasts +
      (locationKey || this.locationService.currentLocation.getValue().Key) +
      `?apikey=${this.apiKey}&metric=true`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const result = res.DailyForecasts.map((el: any) => ({
          Date: new Date(el.Date),
          Icon: el.Day.Icon,
          MinTemp: el.Temperature.Minimum.Value,
          MaxTemp: el.Temperature.Maximum.Value
        }));
        this.weekForecast.next(result);
        return result;
      })
    );

    // const fiveDayForecast: DayWeatherForecast[] = FiveDayForecast.DailyForecasts.map(
    //   el => ({
    //     Date: new Date(el.Date),
    //     Icon: el.Day.Icon,
    //     MinTemp: el.Temperature.Minimum.Value,
    //     MaxTemp: el.Temperature.Maximum.Value
    //   })
    // );

    // this.weekForecast.next(fiveDayForecast);
    // return fiveDayForecast;
  }
}

import { Component, OnInit } from "@angular/core";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { WeatherService } from "app/shared/services/weather.service";
import { HourWeatherForecast } from "app/shared/models/weather.model";

@Component({
  selector: "aeric-hourly-forecast",
  templateUrl: "./hourly-forecast.component.html",
  styleUrls: ["./hourly-forecast.component.scss"]
})
export class HourlyForecastComponent implements OnInit {
  faSun = faSun;

  hourlyForecasts: HourWeatherForecast[];

  constructor(private weatherService: WeatherService) {}

  get $hourlyForecasts() {
    return this.weatherService.fiveHourForecast;
  }

  ngOnInit() {}
}

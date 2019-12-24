import { Component, OnInit } from "@angular/core";
import { LocationService } from "app/services/location.service";
import { WeatherService } from "app/services/weather.service";

@Component({
  selector: "aeric-weekly-weather",
  templateUrl: "./weekly-weather.component.html",
  styleUrls: ["./weekly-weather.component.scss"]
})
export class WeeklyWeatherComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  get $currentLocation() {
    return this.locationService.currentLocation;
  }

  get $currentWeeksWeather() {
    return this.weatherService.weekForecast;
  }

  ngOnInit() {}
}

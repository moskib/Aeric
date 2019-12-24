import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/services/location.service';
import { BehaviorSubject } from 'rxjs';
import { Location } from 'app/models/location.model';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'aeric-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
  }

  get $currentWeather() {
    return this.weatherService.fiveHourForecast;
  }

  get $currentLocation(): BehaviorSubject<Location> {
    return this.locationService.currentLocation;
  }

}

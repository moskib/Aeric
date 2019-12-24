import { Component, OnInit } from '@angular/core';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'app/services/weather.service';
import { DayWeatherForecast } from 'app/models/weather.model';
import { LocationService } from 'app/services/location.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'aeric-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit {

  faCloudSun = faCloudSun;

  weekForecast: DayWeatherForecast[];

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) { }

  get $currentLocation() {
    return this.locationService.currentLocation.asObservable();
  }

  ngOnInit() {
    // this.weatherService.getHourlyForecast();
    this.weekForecast = this.weatherService.getFiveDayForecast();
  }

}

import { Component, OnInit } from '@angular/core';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'aeric-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit {

  faCloudSun = faCloudSun;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getHourlyForecast();
  }

}

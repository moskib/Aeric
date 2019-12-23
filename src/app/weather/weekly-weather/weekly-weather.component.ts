import { Component, OnInit } from '@angular/core';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aeric-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit {

  faCloudSun = faCloudSun;

  constructor() { }

  ngOnInit() {
  }

}

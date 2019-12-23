import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss']
})
export class HourlyForecastCardComponent implements OnInit {

  @Input() time;
  @Input() icon: number;
  @Input() temp: number;

  constructor() { }

  ngOnInit() {
  }

}

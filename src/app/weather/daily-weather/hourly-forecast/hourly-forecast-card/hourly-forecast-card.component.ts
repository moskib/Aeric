import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss']
})
export class HourlyForecastCardComponent implements OnInit {

  @Input() time;
  @Input() icon: IconDefinition;
  @Input() temp: number;

  constructor() { }

  ngOnInit() {
  }

}

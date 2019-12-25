import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherComponent } from "./weather.component";
import { WeeklyWeatherComponent } from "./weekly-weather/weekly-weather.component";
import { DailyWeatherComponent } from "./daily-weather/daily-weather.component";
import { HourlyForecastComponent } from "./daily-weather/hourly-forecast/hourly-forecast.component";
import { HourlyForecastCardComponent } from "./daily-weather/hourly-forecast/hourly-forecast-card/hourly-forecast-card.component";

@NgModule({
  declarations: [
    WeatherComponent,
    WeeklyWeatherComponent,
    DailyWeatherComponent,
    HourlyForecastComponent,
    HourlyForecastCardComponent
  ],
  exports: [
    WeatherComponent,
    WeeklyWeatherComponent,
    DailyWeatherComponent,
    HourlyForecastComponent,
    HourlyForecastCardComponent
  ],
  imports: [CommonModule]
})
export class WeatherModule {}

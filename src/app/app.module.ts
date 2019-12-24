import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DailyWeatherComponent } from './weather/daily-weather/daily-weather.component';
import { HourlyForecastCardComponent } from './weather/daily-weather/hourly-forecast/hourly-forecast-card/hourly-forecast-card.component';
import { HourlyForecastComponent } from './weather/daily-weather/hourly-forecast/hourly-forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { WeeklyWeatherComponent } from './weather/weekly-weather/weekly-weather.component';





@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeeklyWeatherComponent,
    DailyWeatherComponent,
    NavbarComponent,
    HourlyForecastComponent,
    HourlyForecastCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

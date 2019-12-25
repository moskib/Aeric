import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { SharedModule } from "./shared/shared.module";
import { DailyWeatherComponent } from "./weather/daily-weather/daily-weather.component";
import { HourlyForecastCardComponent } from "./weather/daily-weather/hourly-forecast/hourly-forecast-card/hourly-forecast-card.component";
import { HourlyForecastComponent } from "./weather/daily-weather/hourly-forecast/hourly-forecast.component";
import { WeatherComponent } from "./weather/weather.component";
import { WeeklyWeatherComponent } from "./weather/weekly-weather/weekly-weather.component";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeeklyWeatherComponent,
    DailyWeatherComponent,
    HourlyForecastComponent,
    HourlyForecastCardComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

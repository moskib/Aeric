import { Component } from "@angular/core";
import { Location } from "app/shared/models/location.model";
import { HourWeatherForecast } from "app/shared/models/weather.model";
import { FavoritesService } from "app/shared/services/favorites.service";
import { LocationService } from "app/shared/services/location.service";
import { WeatherService } from "app/shared/services/weather.service";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";

@Component({
  selector: "aeric-daily-weather",
  templateUrl: "./daily-weather.component.html",
  styleUrls: ["./daily-weather.component.scss"]
})
export class DailyWeatherComponent {
  cannotAddToFavorites = false;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private favoritesService: FavoritesService
  ) {}

  get $cannotAddToFavorites(): Observable<boolean> {
    return combineLatest(
      this.favoritesService.favorites,
      this.locationService.currentLocation,
      (favorites, currentLocation) =>
        favorites.length >= 5 ||
        !!favorites.find(e => e.Key === currentLocation.Key)
    );
  }

  get $favorites(): Observable<Location[]> {
    return this.favoritesService.favorites;
  }

  get $currentWeather(): Observable<HourWeatherForecast[]> {
    return this.weatherService.fiveHourForecast;
  }

  get $currentLocation(): BehaviorSubject<Location> {
    return this.locationService.currentLocation;
  }

  saveLocationToFavorites(): void {
    this.favoritesService.saveFavorite(this.$currentLocation.value);
    this.cannotAddToFavorites = true;
  }
}

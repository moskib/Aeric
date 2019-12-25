import { Component, OnInit } from "@angular/core";
import { LocationService } from "app/services/location.service";
import { BehaviorSubject } from "rxjs";
import { Location } from "app/models/location.model";
import { WeatherService } from "app/services/weather.service";
import { FavoritesService } from "app/services/favorites.service";

@Component({
  selector: "aeric-daily-weather",
  templateUrl: "./daily-weather.component.html",
  styleUrls: ["./daily-weather.component.scss"]
})
export class DailyWeatherComponent implements OnInit {
  cannotAddToFavorites = false;
  currentLocation: Location = null;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation.getValue();
    const favorites: Location[] = this.favoritesService.favorites.getValue();

    this.cannotAddToFavorites =
      favorites.length > 5 ||
      !!favorites.find(e => e.Key === this.currentLocation.Key);
  }

  get $currentWeather() {
    return this.weatherService.fiveHourForecast;
  }

  get $currentLocation(): BehaviorSubject<Location> {
    return this.locationService.currentLocation;
  }

  saveLocationToFavorites(): void {
    this.favoritesService.saveFavorite(this.currentLocation);
    this.cannotAddToFavorites = true;
  }
}

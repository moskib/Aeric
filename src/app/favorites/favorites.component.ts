import { Component, OnInit } from "@angular/core";
import { Location } from "../models/location.model";
import { Router } from "@angular/router";
import { LocationService } from "app/services/location.service";

@Component({
  selector: "aeric-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  // favorites: Location[] = [];

  favorites: Location[] = [
    { Key: "55489", CityName: "London", CountryName: "Ontario" }
  ];

  constructor(
    private router: Router,
    private locationService: LocationService
  ) {}

  ngOnInit() {}

  onViewLocation(location: Location) {
    this.locationService.setCurrentLocation(location);
    this.router.navigate(["/"]);
  }
}

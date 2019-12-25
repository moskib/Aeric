import { Component, OnInit } from "@angular/core";
import { Location } from "../models/location.model";

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

  constructor() {}

  ngOnInit() {}
}

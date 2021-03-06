import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Location } from "../models/location.model";
import { AutoComplete } from "./fake-api";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  private defaultLocation: Location = {
    Key: "215854",
    CityName: "Tel Aviv",
    CountryName: "Israel"
  };

  currentLocation = new BehaviorSubject<Location>(this.defaultLocation);

  constructor(private http: HttpClient) {
    // check if the local storage is empty.
    // if so, set default.
    // Otherwize, set the Behavior subject used throughout the project.
    if (!localStorage.getItem("location")) {
      localStorage.setItem("location", JSON.stringify(this.defaultLocation));
    } else {
      this.currentLocation.next(JSON.parse(localStorage.getItem("location")));
    }
  }

  getSearchAutoComplete1(): Location[] {
    return AutoComplete.map(el => ({
      Key: el.Key,
      CityName: el.LocalizedName,
      CountryName: el.Country.LocalizedName
    }));
  }

  getSearchAutoComplete(searchTerm: string): Observable<Location[]> {
    return this.http
      .get(
        this.baseUrl +
          `locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${searchTerm}`
      )
      .pipe(
        map((res: any) =>
          res.map(el => ({
            Key: el.Key,
            CityName: el.LocalizedName,
            CountryName: el.Country.LocalizedName
          }))
        )
      );
  }

  setCurrentLocation(location: Location) {
    this.currentLocation.next(location);
    localStorage.setItem("location", JSON.stringify(location));
  }
}

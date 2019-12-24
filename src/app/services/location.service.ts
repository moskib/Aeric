import { Injectable } from '@angular/core';
import { AutoComplete } from './fake-api';
import { Location } from '../models/location.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private defaultLocation: Location = {
    Key: '215854',
    CityName: 'Tel Aviv',
    CountryName: 'Israel'
  };

  currentLocation = new BehaviorSubject<Location>(this.defaultLocation);


  constructor() {
    // check if the local storage is empty.
    // if so, set default.
    // Otherwize, set the Behavior subject used throughout the project.
    if (!localStorage.getItem('location')) {
      localStorage.setItem('location', JSON.stringify(this.defaultLocation));
    } else {
      this.currentLocation.next(JSON.parse(localStorage.getItem('location')));
    }
  }

  getSearchAutoComplete(): Location[] {
    return AutoComplete.map(el => ({
      Key: el.Key,
      CityName: el.LocalizedName,
      CountryName: el.Country.LocalizedName
    }));
  }

}

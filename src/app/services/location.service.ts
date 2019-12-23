import { Injectable } from '@angular/core';
import { AutoComplete } from './fake-api';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getSearchAutoCompolete() {
    console.log(AutoComplete);
  }
}

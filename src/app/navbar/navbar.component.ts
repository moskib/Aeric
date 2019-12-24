import { Component, OnInit } from '@angular/core';
import { faCloudSun, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { LocationService } from 'app/services/location.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/public_api';
import { Observable } from 'rxjs';
import { Location } from 'app/models/location.model';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected: string;
  cityNames: Location[] = [];
  selectedLocation: Location;
  btnDisabled = true;
  isCollapsed = true;
  icons =
    {
      brandIcon: faCloudSun,
      searchIcon: faSearch,
      favIcon: faStar
    };


  constructor(private locationService: LocationService) {
    this.cityNames = locationService.getSearchAutoComplete();
  }

  ngOnInit() {
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.selectedLocation = e.item as Location;
    this.btnDisabled = false;
  }

  onSearchClicked() {
    this.locationService.setCurrentLocation(this.selectedLocation);
    this.btnDisabled = true;
    this.selected = '';
  }
}

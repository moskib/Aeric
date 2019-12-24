import { Component, OnInit } from "@angular/core";
import {
  faCloudSun,
  faStar,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { LocationService } from "app/services/location.service";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead/public_api";
import { Observable } from "rxjs";
import { Location } from "app/models/location.model";
import { WeatherService } from "app/services/weather.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  selected: string;
  $cityNames: Observable<Location[]> = new Observable<Location[]>();
  selectedLocation: Location;
  btnDisabled = true;
  isCollapsed = true;
  icons = {
    brandIcon: faCloudSun,
    searchIcon: faSearch,
    favIcon: faStar
  };

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {}

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.selectedLocation = e.item as Location;
    this.btnDisabled = false;
  }

  onSearchClicked() {
    this.locationService.setCurrentLocation(this.selectedLocation);
    this.weatherService.getFiveDayForecast().subscribe();
    this.weatherService.getHourlyForecast().subscribe();
    this.btnDisabled = true;
    this.selected = "";
  }

  onChange(event: InputEvent) {
    if (this.selected.length > 3) {
      this.$cityNames = this.locationService.getSearchAutoComplete(
        this.selected
      );
    }
  }
}

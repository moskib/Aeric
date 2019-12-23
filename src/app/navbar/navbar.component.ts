import { Component, OnInit } from '@angular/core';
import { faCloudSun, IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  icons =
    {
      brandIcon: faCloudSun,
      searchIcon: faSearch
    }


  constructor() { }

  ngOnInit() {
  }

}

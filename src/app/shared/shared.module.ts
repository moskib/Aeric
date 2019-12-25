import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule } from "@angular/forms";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CollapseModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ]
})
export class SharedModule {}

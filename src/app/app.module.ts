import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { SharedModule } from "./shared/shared.module";
import { WeatherModule } from "./weather/weather.module";

@NgModule({
  declarations: [AppComponent, FavoritesComponent],
  imports: [
    BrowserModule,
    SharedModule,
    WeatherModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

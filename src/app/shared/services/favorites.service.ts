import { Injectable } from "@angular/core";
import { Location } from "app/shared/models/location.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  public favorites: BehaviorSubject<Location[]> = new BehaviorSubject<
    Location[]
  >([]);

  constructor() {
    this.getFavorites();
  }

  private getFavorites(): void {
    let favorites = JSON.parse(localStorage.getItem("favorites")) as Location[];

    if (!favorites) {
      favorites = [];
    }

    this.favorites.next(favorites);
  }

  public saveFavorite(location: Location): void {
    // restrict only 5 locations:
    const fav: Location[] = this.favorites.getValue();

    if (fav.length < 5) {
      // add another favorite
      fav.push(location);

      this.favorites.next(fav);
      localStorage.setItem("favorites", JSON.stringify(fav));
    } else {
      // otherwise, throw an error because this was suppose to be protected by the component.
      throw Error("favorites length cannot be greater than 5");
    }
  }
}

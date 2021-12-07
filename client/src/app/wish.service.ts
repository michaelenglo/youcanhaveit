import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor() { }

  getWishes() {
    return of([
      { name: "ps5", price: "50"},
      { name: "tv", price: "50"},
    ]);
  }
}

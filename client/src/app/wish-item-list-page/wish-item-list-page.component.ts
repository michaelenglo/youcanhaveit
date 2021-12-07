import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-item-list-page',
  templateUrl: './wish-item-list-page.component.html',
  styleUrls: ['./wish-item-list-page.component.scss']
})
export class WishItemListPageComponent implements OnInit {

  readonly wishItems = [
    { name: "ps5", price: "50"},
    { name: "tv", price: "50"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wish-item-list-page',
  templateUrl: './wish-item-list-page.component.html',
  styleUrls: ['./wish-item-list-page.component.scss']
})
export class WishItemListPageComponent implements OnInit {

  readonly wishItems$ = this.wishService.getWishes();

  constructor(readonly wishService: WishService) { }

  ngOnInit(): void {
  }

}

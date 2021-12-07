import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WishItemListPageComponent } from './wish-item-list-page/wish-item-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WishItemListPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

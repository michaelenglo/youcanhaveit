import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishItemListPageComponent } from './wish-item-list-page.component';

describe('WishItemListPageComponent', () => {
  let component: WishItemListPageComponent;
  let fixture: ComponentFixture<WishItemListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishItemListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishItemListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

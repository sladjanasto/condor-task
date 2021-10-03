import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandmenuComponent } from './brandmenu.component';

describe('BrandmenuComponent', () => {
  let component: BrandmenuComponent;
  let fixture: ComponentFixture<BrandmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

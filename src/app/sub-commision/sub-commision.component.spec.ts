import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCommisionComponent } from './sub-commision.component';

describe('SubCommisionComponent', () => {
  let component: SubCommisionComponent;
  let fixture: ComponentFixture<SubCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCommisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

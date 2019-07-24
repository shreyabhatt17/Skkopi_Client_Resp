import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCategoriesComponent } from './college-categories.component';

describe('CollegeCategoriesComponent', () => {
  let component: CollegeCategoriesComponent;
  let fixture: ComponentFixture<CollegeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

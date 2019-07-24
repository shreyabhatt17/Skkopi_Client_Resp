import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateCategoriesComponent } from './intermediate-categories.component';

describe('IntermediateCategoriesComponent', () => {
  let component: IntermediateCategoriesComponent;
  let fixture: ComponentFixture<IntermediateCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCollegeComponent } from './main-college.component';

describe('MainCollegeComponent', () => {
  let component: MainCollegeComponent;
  let fixture: ComponentFixture<MainCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

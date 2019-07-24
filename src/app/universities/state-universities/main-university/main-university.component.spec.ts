import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUniversityComponent } from './main-university.component';

describe('MainUniversityComponent', () => {
  let component: MainUniversityComponent;
  let fixture: ComponentFixture<MainUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateUniversitiesComponent } from './state-universities.component';

describe('StateUniversitiesComponent', () => {
  let component: StateUniversitiesComponent;
  let fixture: ComponentFixture<StateUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

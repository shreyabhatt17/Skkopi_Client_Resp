import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCollegesComponent } from './state-colleges.component';

describe('StateCollegesComponent', () => {
  let component: StateCollegesComponent;
  let fixture: ComponentFixture<StateCollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

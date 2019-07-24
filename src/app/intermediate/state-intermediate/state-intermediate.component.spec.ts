import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateIntermediateComponent } from './state-intermediate.component';

describe('StateIntermediateComponent', () => {
  let component: StateIntermediateComponent;
  let fixture: ComponentFixture<StateIntermediateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateIntermediateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

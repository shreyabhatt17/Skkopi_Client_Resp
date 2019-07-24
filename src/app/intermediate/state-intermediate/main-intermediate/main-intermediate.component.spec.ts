import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIntermediateComponent } from './main-intermediate.component';

describe('MainIntermediateComponent', () => {
  let component: MainIntermediateComponent;
  let fixture: ComponentFixture<MainIntermediateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIntermediateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

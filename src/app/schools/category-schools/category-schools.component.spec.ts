import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySchoolsComponent } from './category-schools.component';

describe('CategorySchoolsComponent', () => {
  let component: CategorySchoolsComponent;
  let fixture: ComponentFixture<CategorySchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

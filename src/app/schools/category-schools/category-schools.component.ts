import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-schools',
  templateUrl: './category-schools.component.html',
  styleUrls: ['./category-schools.component.scss']
})
export class CategorySchoolsComponent implements OnInit {

  statesList = ['Anhdra Pradesh','Telangana','Maharashtra','Karnataka'];

  citiesList = ['Anantapur','Hyderabad','Mumbai','Bangalore'];	

  constructor() { }

  ngOnInit() {
  }

}

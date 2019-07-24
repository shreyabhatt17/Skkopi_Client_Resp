import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-categories',
  templateUrl: './college-categories.component.html',
  styleUrls: ['./college-categories.component.scss']
})
export class CollegeCategoriesComponent implements OnInit {

  statesList: any;
  citiesList: any;	

  constructor() { }

  ngOnInit() {
  }

}

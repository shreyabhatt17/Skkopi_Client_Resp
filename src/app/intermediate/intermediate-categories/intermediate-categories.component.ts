import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermediate-categories',
  templateUrl: './intermediate-categories.component.html',
  styleUrls: ['./intermediate-categories.component.scss']
})
export class IntermediateCategoriesComponent implements OnInit {

  statesList: any;
  citiesList: any;

  constructor() { }

  ngOnInit() {
  }

}

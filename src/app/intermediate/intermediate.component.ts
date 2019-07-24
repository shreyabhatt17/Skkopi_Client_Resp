import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversitiesList } from '../shared/_models/univLists.model';
import { CategoryLinkLists } from '../shared/_models/categoryLists.model';
import { UniversitiesService } from '../services/universities.service';
import { IntercollegeService } from '../services/intercollege.service';
@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.scss']
})
export class IntermediateComponent implements OnInit {


  title = '10+2';

  interCount: any;
  intermediateData: any;
  stateCode: any;

  topCategoryLinks: CategoryLinkLists[] = [
    new CategoryLinkLists('agriculture'),
    new CategoryLinkLists('architecture'),
    new CategoryLinkLists('arts'),
    new CategoryLinkLists('aviation'),
    new CategoryLinkLists('management'),
    new CategoryLinkLists('commerce'),
    new CategoryLinkLists('computer applications'),
    new CategoryLinkLists('dental'),
    new CategoryLinkLists('design'),
    new CategoryLinkLists('education'),
    new CategoryLinkLists('engineering'),
    new CategoryLinkLists('hotel management'),
    new CategoryLinkLists('law')];


  constructor(private interCollegeService: IntercollegeService, private router: Router) { }

  ngOnInit() {

    this.getUniversityCount();
  }


  getUniversityCount() {

    this.interCollegeService.getinterCollegesCountdata().subscribe(
      interCollegeCount => {
        this.interCount = interCollegeCount;
        console.log(this.interCount, 'unicount');

        this.intermediateData = this.interCount.data.juniorCollegesCount;
        console.log(this.intermediateData, 'data');

      },

      (error) => console.log(error)
    );
  }

  viewDetail(state) {
    console.log(state);
    this.router.navigate(['/state-intermediate', state]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversitiesList } from '../shared/_models/univLists.model';
import { CategoryLinkLists } from '../shared/_models/categoryLists.model';
import { CollegesService } from '../services/college.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {


  title = 'colleges';

  collegesCount: any;
  collegeData: any;
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


  constructor(private CollegesService: CollegesService, private router: Router) { }

  ngOnInit() {

    this.collegeCount();

    // // Count of College From  Service
    // this.CollegesService.getCollegesCountdata()
    //   .subscribe(collegesCount => {
    //     this.collegesCount = collegesCount;
    //     console.log(this.collegesCount, 'orders data');
    //   });

  }


  collegeCount() {

    this.CollegesService.getCollegesCountdata().subscribe(
      clgCount => {
        this.collegesCount = clgCount;
        console.log(this.collegesCount, 'unicount');

        this.collegeData = this.collegesCount.data.collegeCounts;
        console.log(this.collegeData, 'data');

      },

      (error) => console.log(error)
    );
  }
  viewDetail(state) {
    console.log(state);
    this.router.navigate(['/state-colleges', state]);
  }

}


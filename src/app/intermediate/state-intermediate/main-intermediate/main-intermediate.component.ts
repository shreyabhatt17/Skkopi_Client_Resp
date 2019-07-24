import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { CategoryLinkLists } from '../../../shared/_models/categoryLists.model';


import { IntercollegeService } from '../../../services/intercollege.service';


@Component({
  selector: 'app-main-intermediate',
  templateUrl: './main-intermediate.component.html',
  styleUrls: ['./main-intermediate.component.scss']
})
export class MainIntermediateComponent implements OnInit {

  mainInterCollegeID: string;

  mainInterCollegeState: string;

  selectedInterCollegeData: any;

  facilities = false;

  mainCollegeID: string;

  mainCollegeState: any;


  facultyDetails: any;

  basicInform: any;

  addressDetails: any;

  facilitiesDetails: any;

  admExamDetails: any;

  admCollKeypoints: any;

  coursesDetails: any;

  data: any;

  address: any;

  galleries: any;

  streams: any;

  placements: any;

  scholarshipDets: any;

  facultyName: any;

  facultyTitle: any;

  tabs: string[] = [];
  selectedtab = this.tabs[0];


  admtabs: string[] = [];
  selectedadmtab = this.admtabs[0];

  constructor(private route: ActivatedRoute,
    private interCollegeService: IntercollegeService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.mainInterCollegeID = params['id'];
      this.mainInterCollegeState = params['state'];
    });

    this.getinterCollegeData(this.mainInterCollegeState);

    this.selectedtab = this.tabs[0];
    this.selectedadmtab = this.admtabs[0];

  }

  ngOnDestroy() { }


  getinterCollegeData(interCollegeState) {
    this.interCollegeService.getinterCollegeRequest(interCollegeState).subscribe(
      maininterStateData => {
        console.log(maininterStateData);
        for (let i = 0; i < maininterStateData.data.juniorColleges.length; i++) {
          if (this.mainInterCollegeID === maininterStateData.data.juniorColleges[i]._id) {
            this.selectedInterCollegeData = maininterStateData.data.juniorColleges[i];
          }
        }
        this.assignInterCollegeData();

      },
      (error) => console.log(error)
    );
  }


  assignInterCollegeData() {
    // FAculty Array data
    this.facultyDetails = this.selectedInterCollegeData.facultyDetails;
    console.log(this.facultyDetails);


    for (var i = 0; i < this.facultyDetails.length; i++) {
      this.facultyName = this.facultyDetails[i].name;
      this.facultyTitle = this.facultyName.charAt(0);
    }

    this.facilitiesDetails = this.selectedInterCollegeData.facilities;
    console.log(this.facilitiesDetails);

    this.addressDetails = this.selectedInterCollegeData.address;
    console.log(this.addressDetails)

    this.admExamDetails = this.selectedInterCollegeData.admissionDetails.exams;
    console.log(this.admExamDetails);

    for (var i = 0; i < this.selectedInterCollegeData.admissionDetails.exams.length; i++) {
      this.admtabs.push(this.admExamDetails[i].degree);
    }

    this.selectedadmtab = this.admtabs[0];

    // Iterating Courses and Streams 
    for (let i = 0; i < this.selectedInterCollegeData.coursesDetails.courses.length; i++) {
      this.coursesDetails = this.selectedInterCollegeData.coursesDetails.courses[i];
      console.log(this.coursesDetails)
      for (let j = 0; j < this.selectedInterCollegeData.coursesDetails.courses[i].streams.length; j++) {
        this.streams = this.selectedInterCollegeData.coursesDetails.courses[i].streams[j];
        console.log(this.streams)
      }
    }

    this.placements = this.selectedInterCollegeData.placement;

    for (var i = 1; i < this.selectedInterCollegeData.coursesDetails.courses.length; i++) {
      this.tabs.push(this.coursesDetails[i].degree);
    }

    this.selectedtab = this.tabs[0];

    // for (var j = 1; j < this.selectedCollegeData.coursesDetails.courses.length; j++) {
    //   this.streams = this.coursesDetails[j].degree[j].streams;
    //   console.log(this.streams)
    // }

    this.galleries = this.selectedInterCollegeData.galleries;
    this.scholarshipDets = this.selectedInterCollegeData.scholarshipDetails;

  }


  categoryLinkLists: CategoryLinkLists[] = [
    new CategoryLinkLists('info'),
    new CategoryLinkLists('course & fee'),
    new CategoryLinkLists('admissions'),
    new CategoryLinkLists('placements'),
    new CategoryLinkLists('scholarship'),
    new CategoryLinkLists('faculty'),
    new CategoryLinkLists('reviews')];

}

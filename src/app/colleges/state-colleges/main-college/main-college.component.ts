import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { MainUniversity } from '../../../shared/_models/mainUniversity.model';
import { CategoryLinkLists } from '../../../shared/_models/categoryLists.model';

import { CollegesService } from '../../../services/college.service';


@Component({
  selector: 'app-main-college',
  templateUrl: './main-college.component.html',
  styleUrls: ['./main-college.component.scss']
})
export class MainCollegeComponent implements OnInit {

  selectedCollegeData: any;

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

  locatedin: any;

  galleries: any;

  overview: any;

  area: any;

  facilitiesDetailsKeys: any;

  streams: any;

  placements: any;

  facultyName: any;

  transport: any;


  facultyTitle: any;

  scholarshipDets: any;

  tabs: string[] = [];
  selectedtab = this.tabs[0];

  admtabs: string[] = [];
  selectedadmtab = this.admtabs[0];

  district: any;
  distance: any;
  kilometres: any;
  pin: any;
  city: any;
  state: any;
  country: any;
  busStation: any;
  airport: any;
  company: any;
  avgPackage: any;
  highPackage: any;
  scholarship;
  scholarshipReq;
  detailsScholarship;

  constructor(private route: ActivatedRoute, private collegeService: CollegesService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.mainCollegeID = params['id'];
      this.mainCollegeState = params['state'];
    });

    // console.log(this.mainCollegeID, 'main COllege id');

    this.getCollegeData(this.mainCollegeState);

    this.selectedtab = this.tabs[0];
    this.selectedadmtab = this.admtabs[0];


  }

  // ngOnDestroy() { }


  getCollegeData(collegestate) {
    this.collegeService.getCollegeRequest(collegestate).subscribe(
      maincollege => {
        console.log(maincollege);
        for (let i = 0; i < maincollege.data.colleges.length; i++) {
          if (this.mainCollegeID === maincollege.data.colleges[i]._id) {
            console.log(maincollege.data.colleges[i]);
            this.selectedCollegeData = maincollege.data.colleges[i];
            console.dir(this.selectedCollegeData);
          }
        }
        this.assignCollegeData();
      },
      (error) => console.log(error)
    );
  }

  assignCollegeData() {
    this.overview = this.selectedCollegeData.basicInfo.overview;
    this.area = this.selectedCollegeData.address.area;
    this.basicInform = this.selectedCollegeData.basicInfo;
    this.facultyDetails = this.selectedCollegeData.facultyDetails.faculty;
    this.transport = this.selectedCollegeData.facilities.transport;
    this.locatedin = this.selectedCollegeData.address.locatedIn;
    this.district = this.selectedCollegeData.address.district;
    this.kilometres = this.selectedCollegeData.address.kilometres;
    this.pin = this.selectedCollegeData.address.pin;
    this.distance = this.selectedCollegeData.address.distance;
    this.city = this.selectedCollegeData.address.city;
    this.state = this.selectedCollegeData.address.state;
    this.country = this.selectedCollegeData.address.country;
    this.busStation = this.selectedCollegeData.facilities.busStation;
    this.airport = this.selectedCollegeData.facilities.airport;
    this.company = this.selectedCollegeData.placement.company;
    this.avgPackage = this.selectedCollegeData.placement.avgPackage;
    this.highPackage = this.selectedCollegeData.placement.highPackage;
    this.scholarship = this.selectedCollegeData.scholarshipDetails.scholarship;
    this.detailsScholarship = this.selectedCollegeData.scholarshipDetails.detailsScholarship;
    this.scholarshipReq = this.selectedCollegeData.scholarshipDetails.scholarshipReq;
    for (let i = 0; i < this.facultyDetails.length; i++) {
      this.facultyName = this.facultyDetails[i].name;
      this.facultyTitle = this.facultyName.charAt(0);
    }

    this.facilitiesDetails = this.selectedCollegeData.facilities;
    this.addressDetails = this.selectedCollegeData.address;

    this.admExamDetails = this.selectedCollegeData.admissionDetails.exams;

    for (let i = 0; i < this.selectedCollegeData.admissionDetails.exams.length; i++) {
      this.admtabs.push(this.admExamDetails[i].degree);
    }

    this.selectedadmtab = this.admtabs[0];

    this.admCollKeypoints = this.selectedCollegeData.admissionDetails.collegeKeyPoints;
    this.coursesDetails = this.selectedCollegeData.coursesDetails.courses;
    this.placements = this.selectedCollegeData.placement;

    for (let i = 1; i < this.selectedCollegeData.coursesDetails.courses.length; i++) {
      this.tabs.push(this.coursesDetails[i].degree);
    }

    this.selectedtab = this.tabs[0];


    // for (let j = 1; j < this.selectedCollegeData.coursesDetails.courses.length; j++) {
    //   this.streams = this.coursesDetails[j].degree[j].streams;
    //   console.log(this.streams)
    // }

    this.galleries = this.selectedCollegeData.galleries;
  }


  // tslint:disable-next-line: member-ordering
  categoryLinkLists: CategoryLinkLists[] = [
    new CategoryLinkLists('info'),
    new CategoryLinkLists('course & fee'),
    new CategoryLinkLists('admissions'),
    new CategoryLinkLists('placements'),
    new CategoryLinkLists('scholarship'),
    new CategoryLinkLists('faculty'),
    new CategoryLinkLists('reviews')];

}

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

import { MainUniversity } from "../../../shared/_models/mainUniversity.model";
import { CategoryLinkLists } from "../../../shared/_models/categoryLists.model";

import { UniversitiesService } from "../../../services/universities.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: "app-main-university",
  templateUrl: "./main-university.component.html",
  styleUrls: ["./main-university.component.scss"]
})
export class MainUniversityComponent implements OnInit {
  facilities = false;

  mainUniversity: any;

  universityData: any;

  facultyDetails: any;

  basicInform: any;

  addressDetails: any;

  facilitiesDetails: any;

  admExamDetails: any;

  admissionDetails: any;

  courseDetails: any;

  galleries: any;

  data: any;

  address: any;

  facilitiesDetailsKeys: any;

  coursesStreams: any;

  scholarshipDets: any;

  degrees: any;

  affiliatedColleges: any;

  facultyName: any;

  facultyTitle: any;

  tabs: string[] = [];
  selectedtab = this.tabs[0];

  admtabs: string[] = [];
  selectedadmtab = this.admtabs[0];
  private _album: any= [];
  constructor(
    private route: ActivatedRoute,
    private universitiesService: UniversitiesService,
    private _lightbox: Lightbox,
    private router: Router
  ) {
    for (let i = 1; i <= 4; i++) {
      const src = 'demo/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'demo/img/image' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._album.push(album);
    }
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album , index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.mainUniversity = params["id"];
    });

    console.log(this.mainUniversity, "main university id");

    this.getUniversityData(this.mainUniversity);

    console.log(this.tabs);
    console.log(this.admtabs);

    this.selectedtab = this.tabs[0];
    this.selectedadmtab = this.admtabs[0];
  }

  ngOnDestroy() {}

  getUniversityData(universityID) {
    this.universitiesService.getMainUniversityRequest(universityID).subscribe(
      mainUniversity => {
        this.mainUniversity = mainUniversity;
        //console.log(this.mainUniversity, 'unicount');

        this.universityData = this.mainUniversity.data.university;
        console.log(this.universityData, "university data id");

        this.admExamDetails = this.universityData.admissionDetails.exams;
        this.universityData.basicInfo.name = this.universityData.basicInfo.name.replace(
          /[-]/g,
          "  "
        );
        console.log(this.admExamDetails);

        for (
          var i = 0;
          i < this.universityData.admissionDetails.exams.length;
          i++
        ) {
          this.admtabs.push(this.admExamDetails[i].degree);
        }

        this.selectedadmtab = this.admtabs[0];

        this.basicInform = this.universityData.basicInfo;

        this.affiliatedColleges = this.universityData.basicInfo.affiliatedColleges;

        this.facultyDetails = this.universityData.facultyDetails.faculty;

        for (var i = 0; i < this.facultyDetails.length; i++) {
          this.facultyName = this.facultyDetails[i].name;
          this.facultyTitle = this.facultyName.charAt(0);
        }

        this.facilitiesDetails = this.universityData.facilities;

        this.addressDetails = this.universityData.address;

        this.courseDetails = this.universityData.coursesDetails.courses;
        console.log(this.courseDetails, "university data coursesDetails");

        for (
          var i = 0;
          i < this.universityData.coursesDetails.courses.length;
          i++
        ) {
          this.tabs.push(this.courseDetails[i].degree);
        }

        this.selectedtab = this.tabs[0];

        this.galleries = this.universityData.galleries;

        this.scholarshipDets = this.universityData.scholarshipDetails;
      },
      error => console.log(error)
    );
  }

  categoryLinkLists: CategoryLinkLists[] = [
    new CategoryLinkLists("info"),
    new CategoryLinkLists("course & fee"),
    new CategoryLinkLists("admissions"),
    new CategoryLinkLists("placements"),
    new CategoryLinkLists("scholarship"),
    new CategoryLinkLists("faculty"),
    new CategoryLinkLists("reviews")
  ];
}

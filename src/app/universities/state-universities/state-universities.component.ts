import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

//import { Subscription } from 'rxjs/Subscription';

import { StateUniversitiesList } from "../../shared/_models/stateUniList.model";

import { UniversitiesService } from "../../services/universities.service";

@Component({
  selector: "app-state-universities",
  templateUrl: "./state-universities.component.html",
  styleUrls: ["./state-universities.component.scss"]
})
export class StateUniversitiesComponent implements OnInit, OnDestroy {
  title = "universities";

  stateCode: any;
  stateUniveristyDataCount: number;
  stateuniversitiesListData = [];


  constructor(
    private route: ActivatedRoute,
    private universitiesService: UniversitiesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.stateCode = params["state"];
    });

    console.log(this.stateCode);

    this.getStateUniversities(this.stateCode);
  }

  ngOnDestroy() { }

  getStateUniversities(stateCode) {
    console.log(stateCode);
    this.universitiesService.getUniversityRequest(stateCode).subscribe(
      response => {
        this.stateUniveristyDataCount = response.data.universities.length;
        console.log(this.stateUniveristyDataCount, 'count')
        this.stateuniversitiesListData = response.data.universities;
        console.log(this.stateuniversitiesListData);
        this.stateuniversitiesListData.forEach(element => {
          if (element.logo && element.logo.url) {
            console.log(element.logo.url);
          }
        });
      },
      error => console.log(error)
    );
  }

  viewMainData(id, univName) {
    console.log(univName, "university Name");
    console.log(id, "University ID");
    let univNme = univName.toLowerCase();
    univNme = univNme.replace(/[^a-zA-Z0-9]/g, "-");
    console.log(univNme);
    this.router.navigate(["/main-university", univNme, id]);
  }
}

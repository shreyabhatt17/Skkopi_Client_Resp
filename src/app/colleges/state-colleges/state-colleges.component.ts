import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


//import { Subscription } from 'rxjs/Subscription';

import { CollegesService } from '../../services/college.service';

@Component({
  selector: 'app-state-colleges',
  templateUrl: './state-colleges.component.html',
  styleUrls: ['./state-colleges.component.scss']
})
export class StateCollegesComponent implements OnInit, OnDestroy {


  title = 'colleges';

  stateCollegesParamsData: any;
  stateCollegeData: any;
  stateuniversityArray = [];
  universitiesData = {};

  constructor(private route: ActivatedRoute,
    private collegeService: CollegesService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.stateCollegesParamsData = params['state'];
    });

    console.log(this.stateCollegesParamsData);

    this.getStateColleges(this.stateCollegesParamsData);

  }

  ngOnDestroy() { }


  getStateColleges(stateCode) {
    this.collegeService.getCollegeRequest(stateCode).subscribe(
      stateCollegesData => {
        this.stateCollegesParamsData = stateCollegesData;
        console.log(this.stateCollegesParamsData, 'unicount');
        this.stateCollegeData = this.stateCollegesParamsData.data.colleges;
        console.log(this.stateCollegeData, 'state  colleges data');
      },
      (error) => console.log(error)
    );
  }

  viewMainData(id, state) {
    console.log(id, 'CollegeID', state, 'CollegeState');
    this.router.navigate(['/main-college', id, state]);
  }

}

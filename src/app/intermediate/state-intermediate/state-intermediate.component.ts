import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


//import { Subscription } from 'rxjs/Subscription';
import { IntercollegeService } from '../../services/intercollege.service';

@Component({
  selector: 'app-state-intermediate',
  templateUrl: './state-intermediate.component.html',
  styleUrls: ['./state-intermediate.component.scss']
})
export class StateIntermediateComponent implements OnInit, OnDestroy {


  title = '10+2';

  interStateCodeData: any;
  stateInterCollegeData: any;
  stateuniversityArray = [];
  universitiesData = {};

  constructor(private route: ActivatedRoute, private interCollegeService: IntercollegeService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.interStateCodeData = params['state'];
    });

    console.log(this.interStateCodeData);

    this.getStateUniversities(this.interStateCodeData);

  }

  ngOnDestroy() { }


  getStateUniversities(stateCode) {
    this.interCollegeService.getinterCollegeRequest(stateCode).subscribe(
      stateInterData => {
        this.interStateCodeData = stateInterData;
        console.log(this.interStateCodeData, 'unicount');
        this.stateInterCollegeData = this.interStateCodeData.data.juniorColleges;
        console.log(this.stateInterCollegeData, 'state  Intercollege data');
      },
      (error) => console.log(error)
    );
  }

  viewMainData(id, state) {
    console.log(id, 'InterCollege id', state, 'Inter State');
    this.router.navigate(['/main-intermediate', id, state]);
  }

}

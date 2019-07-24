import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpInterceptor } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class IntercollegeService {

  constructor(private http: HttpClient) { }
  // get juniorColleges count  by state code ids function

  getinterCollegesCountdata() {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('http://ec2-3-16-215-166.us-east-2.compute.amazonaws.com:8080/findJuniorCollegeCountByStateCodeIDS', { headers })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            return data;
            // console.log(data);
          },
          (error) => console.log(error)
        )
      );
  }

  // get state JuniorColleges function
  getinterCollegeRequest(state) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();

    let stateCode = state;
    body = body.set('stateCodeID', stateCode);

    return this.http.post('http://ec2-3-16-215-166.us-east-2.compute.amazonaws.com:8080/findJuniorCollegesByStateCodeID', body, { headers: myheader })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            return data;
          },
          (error) => console.log(error)
        )
      );
  }


}

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpInterceptor
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
@Injectable({
  providedIn: "root"
})
export class CollegesService {
  constructor(private http: HttpClient) {}

  // get Colleges count  by state code ids function

  getCollegesCountdata() {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http
      .post("http://skkopi.com/findCollegeCountByStateCodeIDS", { headers })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            return data;
            // console.log(data);
          },
          error => console.log(error)
        )
      );
  }

  // get state universities function
  getCollegeRequest(state) {
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let body = new HttpParams();

    let stateCode = state;
    body = body.set("stateCodeID", stateCode);

    return this.http
      .post("http://skkopi.com/findCollegesByStateCodeID", body, {
        headers: myheader
      })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            return data;
          },
          error => console.log(error)
        )
      );
  }
}

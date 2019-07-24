import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpInterceptor
} from "@angular/common/http";
// import {Http, Headers, Response } from '@angular/http';

import { Observable } from "rxjs/observable";
import { catchError, map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

@Injectable({
  providedIn: "root"
})
export class UniversitiesService {
  constructor(private http: HttpClient) {}

  ngOnit() {}

  // get university count  by state code ids function

  getUniversitiesCount() {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http
      .post("http://skkopi.com/findUniversityCountByStateCodeIDS", {
        headers
      })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            console.log(response);
            return data;
          },
          error => console.log(error)
        )
      );
  }
  // get university count  by state code ids function

  // get state universities function
  getUniversityRequest(state) {
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let body = new HttpParams();

    let stateCode = state;
    body = body.set("stateCodeID", stateCode);

    return this.http
      .post("http://skkopi.com/findUniversitiesByStateCodeID", body, {
        headers: myheader
      })
      .pipe(
        map(
          (response: any) => {
            const data = response;
            console.log(response);
            return data;
          },
          error => console.log(error)
        )
      );
  }
  // get state universities function

  // find university by id function
  getMainUniversityRequest(universityID) {
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let body = new HttpParams();

    let univId = universityID;
    body = body.set("universityID", univId);

    return (
      this.http
        .post("http://skkopi.com/findUniversityByIDWithOutLog", body, {
          headers: myheader
        })
        //return this.http.post('../../assets/data/university-data.json', body, {headers: myheader})
        .pipe(
          map(
            (response: any) => {
              const data = response;
              console.log(response);
              return data;
            },
            error => console.log(error)
          )
        )
    );
  }
  // find university by id function
}

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { User } from '../models/user';
import { throwError, Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {
    public currentUserData = new BehaviorSubject<object>({});
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    token = null;
    constructor(private _http: Http) {

        this.currentUserSubject = new BehaviorSubject<User>
            (JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }



    // User registration Call
    register(user: User) {
        const header = new Headers({ "Content-Type": "application/json" });
        console.log(user)
        return this._http.post(`http://skkopi.com/userRegistration`, user, { headers: header }).pipe(map(
            (res: Response) => {
                return res.json();
            },
            err => console.log(err)
        )).pipe(
            catchError((error: Response) => {
                return throwError("Error");
            })
        );
    }

    // User Login Call
    getToken(user, pass) {
        const header = new Headers({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        const body =
            "grant_type=password&client_id=restapp&client_secret=restapp&username=" +
            user +
            "&password=" +
            pass;
        return this._http
            .post("http://skkopi.com/oauth/token", body, { headers: header })
            .pipe(map((user: any) => {
                // login successful if there's a jwt token in the response
                if (user) {
                    console.log(JSON.parse(user._body));

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));

                }

                return user;
            }));


    }


    isAuthenticated() {
        if (localStorage.getItem('currentUser')) {
            this.currentUserData.next(JSON.parse(localStorage.getItem('currentUser._body')));
        }

    }





    getMessage(): Observable<object> {
        return this.currentUserData.asObservable();
    }
}
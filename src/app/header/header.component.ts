import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import * as $ from "jquery";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    menuList = ['universities', 'colleges', '10+2', 'schools', 'exams', 'contact-us'];

    menu: any;

    registerForm: FormGroup;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    errorMessage = false;
    private subscription: Subscription;
    message: any;
    userFlag: boolean;
    currentUserData: any;
    constructor(private formBuilder: FormBuilder,
        private titleService: Title,
        private userService: UserService,
        private alertService: AlertService,
        private router: Router) {

        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        if (localStorage.getItem('currentUser')) {
            console.log('User Logged In')
            this.currentUserData = JSON.parse(localStorage.getItem('currentUser'));
            const dt = JSON.parse(this.currentUserData._body);
            this.currentUserData = dt;

            this.userFlag = true;
        } else {
            console.log('No Users Available')
            this.userFlag = false;
        }
    }

    ngOnInit() {
        this.isAuthenticated();

        $(function () {
            $('.toggle-menu').click(function(){
               $('.exo-menu').toggleClass('display');
               
            });
            
           });
           

    }
    setDocTitle(title: string) {
        console.log('current title:::::' + this.titleService.getTitle());
        this.titleService.setTitle('');
        this.titleService.setTitle(title);
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

    onSubmit() {
        console.log(this.registerForm.value)
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;

        if (this.registerForm.valid) {
            this.userService.register(this.registerForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        // this.alertService.success('Registration successful', true);
                        console.log(data)
                        if (data.status === 0) {
                            this.registerForm.reset();
                            this.errorMessage = true;
                            alert('Registerd Success')

                        } else if (data.status == 1) {
                            this.errorMessage = false;
                        }
                        // this.router.navigate(['/login']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }
    }
    logout() {
        // remove user from local storage to log user out
        if (localStorage.getItem('currentUser')) {

            localStorage.removeItem('currentUser');
            this.userFlag = false;
        }

    }
    isAuthenticated() {
        if (localStorage.getItem('currentUser')) {
            // this.currentUserData = JSON.parse(localStorage.getItem('currentUser'));
            // console.log(this.currentUserData);
            this.userFlag = true;
        }
    }

    //Registration formControlsconvenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    // Login FormControlsconvenience getter for easy access to form fields
    get flg() {
        return this.registerForm.controls;
    }

    userLogin() {

        console.log(this.loginForm.value);
        const userCreds = this.loginForm.value;
        const username = userCreds.username;
        const password = userCreds.password;
        this.userService.getToken(username, password).pipe(first())
            .subscribe(
                user => {
                    console.log(JSON.parse(user._body));
                    this.loginForm.reset();
                    this.userFlag = true;
                    // this.currentUserData = JSON.parse(localStorage.getItem('currentUser._body'));
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

   
       
}



























/*
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../shared/_models';
import { UserService } from '../shared/_services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   menuList = ['home','universities','colleges','schools','10+2','job oriented courses','abroad','exams'];

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

}
*/
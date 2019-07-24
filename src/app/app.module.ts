import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UniversitiesService } from './services/universities.service';

import { routing } from './app.routing';

import { HeaderComponent } from './header/header.component';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UniversitiesComponent } from './universities/universities.component';
import { CollegesComponent } from './colleges/colleges.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { JocComponent } from './joc/joc.component';
import { AbroadComponent } from './abroad/abroad.component';
import { ExamsComponent } from './exams/exams.component';
import { SchoolsComponent } from './schools/schools.component';
import { OthersComponent } from './others/others.component';
import { AboutusComponent } from './others/aboutus/aboutus.component';
import { ContactusComponent } from './others/contactus/contactus.component';
import { PrivacypolicyComponent } from './others/privacypolicy/privacypolicy.component';
import { SitemapComponent } from './others/sitemap/sitemap.component';
import { DisclaimerComponent } from './others/disclaimer/disclaimer.component';
import { AdvertisementsComponent } from './others/advertisements/advertisements.component';
import { TermsnconditionsComponent } from './others/termsnconditions/termsnconditions.component';
import { StateUniversitiesComponent } from './universities/state-universities/state-universities.component';
import { MainUniversityComponent } from './universities/state-universities/main-university/main-university.component';
import { StateCollegesComponent } from './colleges/state-colleges/state-colleges.component';
import { MainCollegeComponent } from './colleges/state-colleges/main-college/main-college.component';
import { StateIntermediateComponent } from './intermediate/state-intermediate/state-intermediate.component';
import { MainIntermediateComponent } from './intermediate/state-intermediate/main-intermediate/main-intermediate.component';
import { CategorySchoolsComponent } from './schools/category-schools/category-schools.component';
import { IntermediateCategoriesComponent } from './intermediate/intermediate-categories/intermediate-categories.component';
import { CollegeCategoriesComponent } from './colleges/college-categories/college-categories.component';
import { CourseOverviewComponent } from './colleges/college-categories/course-overview/course-overview.component';
import { CollegesService } from './services/college.service';
import { AppTabActiveDirective } from './shared/directives/tabActive.directive';
import { IntercollegeService } from '../app/services/intercollege.service';
import { FacultyComponent } from './common/faculty/faculty.component';
import { UserService } from '../app/services/user.service';
import { AlertService } from '../app/services/alert.service';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { CountToModule } from 'angular-count-to';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderBannerComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UniversitiesComponent,
    CollegesComponent,
    IntermediateComponent,
    JocComponent,
    AbroadComponent,
    ExamsComponent,
    SchoolsComponent,
    OthersComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    SitemapComponent,
    DisclaimerComponent,
    AdvertisementsComponent,
    TermsnconditionsComponent,
    StateUniversitiesComponent,
    MainUniversityComponent,
    StateCollegesComponent,
    MainCollegeComponent,
    StateIntermediateComponent,
    MainIntermediateComponent,
    CategorySchoolsComponent,
    IntermediateCategoriesComponent,
    CollegeCategoriesComponent,
    CourseOverviewComponent,
    FacultyComponent,
    AppTabActiveDirective
  ],
  imports: [
    BrowserModule,
    TooltipModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    OwlModule,
    CountToModule,
    LightboxModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot()],
  providers: [UniversitiesService,
    CollegesService,
    IntercollegeService,
    UserService,
 
    AlertService,
    Title],

  bootstrap: [AppComponent]
})
export class AppModule { }

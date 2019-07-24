import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SliderBannerComponent } from "./slider-banner/slider-banner.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

import { UniversitiesComponent } from "./universities/universities.component";

import { StateUniversitiesComponent } from "./universities/state-universities/state-universities.component";

import { MainUniversityComponent } from "./universities/state-universities/main-university/main-university.component";

import { CollegesComponent } from "./colleges/colleges.component";

import { CollegeCategoriesComponent } from "./colleges/college-categories/college-categories.component";

import { CourseOverviewComponent } from "./colleges/college-categories/course-overview/course-overview.component";

import { StateCollegesComponent } from "./colleges/state-colleges/state-colleges.component";

import { MainCollegeComponent } from "./colleges/state-colleges/main-college/main-college.component";

import { IntermediateComponent } from "./intermediate/intermediate.component";

import { StateIntermediateComponent } from "./intermediate/state-intermediate/state-intermediate.component";

import { MainIntermediateComponent } from "./intermediate/state-intermediate/main-intermediate/main-intermediate.component";

import { IntermediateCategoriesComponent } from "./intermediate/intermediate-categories/intermediate-categories.component";

import { JocComponent } from "./joc/joc.component";
import { AbroadComponent } from "./abroad/abroad.component";
import { ExamsComponent } from "./exams/exams.component";
import { SchoolsComponent } from "./schools/schools.component";
import { CategorySchoolsComponent } from "./schools/category-schools/category-schools.component";

import { OthersComponent } from "./others/others.component";
import { AboutusComponent } from "./others/aboutus/aboutus.component";
import { ContactusComponent } from "./others/contactus/contactus.component";
import { PrivacypolicyComponent } from "./others/privacypolicy/privacypolicy.component";
import { SitemapComponent } from "./others/sitemap/sitemap.component";
import { DisclaimerComponent } from "./others/disclaimer/disclaimer.component";
import { AdvertisementsComponent } from "./others/advertisements/advertisements.component";
import { TermsnconditionsComponent } from "./others/termsnconditions/termsnconditions.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "universities", data: { title: "My Home Page" }, component: UniversitiesComponent },
  { path: "10+2", component: IntermediateComponent },
  { path: "colleges", component: CollegesComponent },
  { path: "colleges-categories", component: CollegeCategoriesComponent },
  { path: "course-overview", component: CourseOverviewComponent },
  { path: "schools", component: SchoolsComponent },
  { path: "category-schools", component: CategorySchoolsComponent },
  { path: "job oriented courses", component: JocComponent },
  { path: "abroad", component: AbroadComponent },
  { path: "exams", component: ExamsComponent },
  { path: "about-skkopi", component: AboutusComponent },
  { path: "advertisements", component: AdvertisementsComponent },
  { path: "contact-us", component: ContactusComponent },
  { path: "disclaimer", component: DisclaimerComponent },
  { path: "privacy-policy", component: PrivacypolicyComponent },
  { path: "sitemap", component: SitemapComponent },
  { path: "terms-conditions", component: TermsnconditionsComponent },
  { path: "state-universities/:state", component: StateUniversitiesComponent },
  { path: "main-university/:name/:id", component: MainUniversityComponent },
  { path: "state-colleges/:state", component: StateCollegesComponent },
  { path: "main-college/:id/:state", component: MainCollegeComponent },
  { path: "state-intermediate/:state", component: StateIntermediateComponent },
  { path: "main-intermediate/:name/:id", component: MainIntermediateComponent },
  {
    path: "intermediate-categories",
    component: IntermediateCategoriesComponent
  },

  // otherwise redirect to home
  { path: "", component: HomeComponent },

  // Anything Not Found redirect to Page Not Found
  { path: "**", component: PagenotfoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });

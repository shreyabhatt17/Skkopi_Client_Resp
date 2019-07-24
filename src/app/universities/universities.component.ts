import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UniversitiesList } from "../shared/_models/univLists.model";
import { CategoryLinkLists } from "../shared/_models/categoryLists.model";
import { UniversitiesService } from "../services/universities.service";

@Component({
  selector: "app-universities",
  templateUrl: "./universities.component.html",
  styleUrls: ["./universities.component.scss"]
})
export class UniversitiesComponent implements OnInit {
  title = "universities";
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]
  universitiesCount: any;
  univeristyData: any;
  stateCode: any;

  topCategoryLinks: CategoryLinkLists[] = [
    new CategoryLinkLists("agriculture"),
    new CategoryLinkLists("architecture"),
    new CategoryLinkLists("arts"),
    new CategoryLinkLists("aviation"),
    new CategoryLinkLists("management"),
    new CategoryLinkLists("commerce"),
    new CategoryLinkLists("computer applications"),
    new CategoryLinkLists("dental"),
    new CategoryLinkLists("design"),
    new CategoryLinkLists("education"),
    new CategoryLinkLists("engineering"),
    new CategoryLinkLists("hotel management"),
    new CategoryLinkLists("law")
  ];

  constructor(
    private universitiesService: UniversitiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUniversityCount();

    this.universitiesService
      .getUniversitiesCount()
      .subscribe(universitiesCount => {
        this.universitiesCount = universitiesCount;
        console.log(this.universitiesCount, "orders data");
      });
  }

  getUniversityCount() {
    this.universitiesService.getUniversitiesCount().subscribe(
      univsCount => {
        this.universitiesCount = univsCount;
        console.log(univsCount, "unicount");

        this.univeristyData = this.universitiesCount.data.universityCounts;
        console.log(this.univeristyData, "data");
      },

      error => console.log(error)
    );
  }

  viewDetail(state) {
    console.log(state);
    this.router.navigate(["/state-universities", state]);
  }

  
}

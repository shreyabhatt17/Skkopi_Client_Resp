import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  title = 'contact us';

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Contact skkopi for any enquires regarding admissions, fee, courses, facilities and more information about universities, colleges, schools, training Institutes in India ' });
  }

  ngOnInit() {
  }

}

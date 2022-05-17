import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() isList = false;
  date = new Date();
  @Input() item = {
    "Name": "",
    "Author": "",
    "Description": "",
    "Thumbnail": "",
    "ContentType": "",
    "IsEvent": false,
    rating: 0,
    "StartDate": "",
    "EndDate": ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}

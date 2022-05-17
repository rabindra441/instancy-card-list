import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { DataService } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any | undefined=[];
  isLoading = false;
  isList = false;
  constructor(private dataService: DataService) { }
  starsCount=4;
  ngOnInit() {
    this.isLoading = true;
    this.dataService
      .readJson()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: string) => {
        this.data = data;
      });
  }
}

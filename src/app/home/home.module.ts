import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardViewComponent } from './card-view/card-view.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, NgbTooltipModule, TranslateModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, CardViewComponent, BreadcrumbComponent],
})
export class HomeModule { }

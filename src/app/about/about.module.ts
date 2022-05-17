import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '@app/@shared';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule,NgbProgressbarModule, TranslateModule, AboutRoutingModule,SharedModule],
  declarations: [AboutComponent],
})
export class AboutModule {}

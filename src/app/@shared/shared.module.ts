import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [TranslateModule,FormsModule, CommonModule],
  declarations: [LoaderComponent,RatingComponent],
  exports: [FormsModule,LoaderComponent,RatingComponent],
})
export class SharedModule {}

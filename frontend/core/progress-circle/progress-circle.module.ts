import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressCircleComponent} from './progress-circle.component';

@NgModule({
  declarations: [
    ProgressCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressCircleComponent
  ],
  providers: []
})
export class ProgressCircleModule { }

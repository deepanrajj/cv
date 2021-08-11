import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResearchComponent} from './research.component';

const researchRoutes: Routes = [
  {
    path: '',
    component: ResearchComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(researchRoutes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }

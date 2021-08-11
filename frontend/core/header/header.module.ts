import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HeaderService} from './services/header.service';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HeaderService
  ]
})
export class HeaderModule { }

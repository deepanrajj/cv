import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResearchModule} from './pages/research/research.module';
import {ContactModule} from './pages/contact/contact.module';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'research',
    loadChildren: () => ResearchModule
  },
  {
    path: 'contact',
    loadChildren: () => ContactModule
  },
  { path:  '**', redirectTo:  'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

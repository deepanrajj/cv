import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {SendMessageModule} from '../../../../core/send-message/send-message.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
      CommonModule,
      ContactRoutingModule,
      SendMessageModule
  ],
  providers: []
})
export class ContactModule { }

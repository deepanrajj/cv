import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SendMessageComponent} from './send-message.component';
import {InputFieldModule} from '../input-field/input-field.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../button/button.module';

@NgModule({
  declarations: [
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    SendMessageComponent
  ],
  providers: []
})
export class SendMessageModule { }

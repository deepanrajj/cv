import {FormGroup} from '@angular/forms';
import {Button} from '../../button/models/button.model';

export interface SendMessage {
  form: FormGroup;
  formMessage?: string;
  buttons: Button[];
  submit: (arg0: FormGroup) => void;
}

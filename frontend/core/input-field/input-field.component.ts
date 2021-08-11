import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() form: FormGroup;
  @Input() key: string;
  @Input() controlType: string;
  @Input() placeholder: string;
  @Input() inputType!: string;

  /**
   * Check if form control is valid
   * @return boolean
   */
  get isValid(): boolean {
    return this.form.controls[this.key].untouched || !this.form.controls[this.key].dirty || this.form.controls[this.key].valid;
  }

  /**
   * Get control errors
   * @return ValidationErrors | null
   */
  get fieldErrors(): ValidationErrors | null {
    return this.form.controls[this.key] ?  this.form.controls[this.key].errors : null;
  }
}

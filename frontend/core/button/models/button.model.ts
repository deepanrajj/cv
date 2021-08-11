export interface Button {
  id?: string;
  text?: string;
  class?: string;
  tooltip?: string;
  type?: ButtonType;
  disabled?: boolean;
  disableOnInvalidForm?: boolean;
  onClick?: (button: Button) => void;
}

export enum ButtonType {
  button = 'button',
  submit = 'submit'
}

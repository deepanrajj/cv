import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {About, Contact, Research, SendMessagePayload} from '../models/app.model';
import {Button, ButtonType} from '../../../core/button/models/button.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendMessage} from '../../../core/send-message/models/send-message.model';

@Injectable()
export class CvService {

  constructor(private readonly http: HttpClient,
              private configService: ConfigService) {
  }

  getAbout(): Observable<About> {
    return this.http.get<About>(`${this.configService.getValue('restUrl')}/about`);
  }

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(`${this.configService.getValue('restUrl')}/contact`);
  }

  getResearch(): Observable<Research> {
    return this.http.get<Research>(`${this.configService.getValue('restUrl')}/research`);
  }

  getSendMessage(): SendMessage {
    const sendButton: Button = {
      id: 'send_button',
      tooltip: 'Send Message',
      text: 'Send Message',
      type: ButtonType.submit,
      disableOnInvalidForm: true
    };
    const form = new FormGroup({
      name: new FormControl('', [Validators.nullValidator, Validators.required]),
      email: new FormControl('', [Validators.nullValidator, Validators.required, Validators.email]),
      message: new FormControl('', [])
    });

    return {
      form,
      submit: () => {
        const payload = {...form.value};
        this.postMessage(payload).subscribe(() => {
          form.patchValue({name: '', email: '', message: ''});
        });
      },
      buttons: [sendButton]
    };
  }

  postMessage(message: SendMessagePayload): Observable<void> {

    return this.http.post<void>(`${this.configService.getValue('restUrl')}/contact`, {message});
  }
}

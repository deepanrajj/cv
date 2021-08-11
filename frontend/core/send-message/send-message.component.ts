import {Component, Input, OnInit} from '@angular/core';
import {CvService} from '../../src/app/services/cv.service';
import {SendMessage} from './models/send-message.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Input() sendMessage!: SendMessage;
  constructor(private readonly cvService: CvService) { }

  ngOnInit(): void {
    if (!this.sendMessage) {
      this.sendMessage = this.cvService.getSendMessage();
    }
  }
}

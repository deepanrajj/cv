import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../models/app.model';
import {CvService} from '../../services/cv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact$: Observable<Contact>;
  constructor(private readonly cvService: CvService) { }

  ngOnInit(): void {
    this.contact$ = this.cvService.getContact();
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CvService} from '../../services/cv.service';
import {About} from '../../models/app.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about$: Observable<About>;
  constructor(private readonly cvService: CvService) { }

  ngOnInit(): void {
    this.about$ = this.cvService.getAbout();
  }
}

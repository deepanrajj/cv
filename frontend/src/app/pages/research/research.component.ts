import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CvService} from '../../services/cv.service';
import {Research} from '../../models/app.model';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  research$: Observable<Research>;
  constructor(private readonly cvService: CvService,
              private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.research$ = this.cvService.getResearch();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

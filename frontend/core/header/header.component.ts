import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HeaderService} from './services/header.service';
import {Header} from './models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header$: Observable<Header>;

  constructor(private readonly headerService: HeaderService) { }

  ngOnInit(): void {
    this.header$ = this.headerService.getHeader();
  }
}

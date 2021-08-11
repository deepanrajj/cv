import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../../src/app/services/config.service';
import {Header} from '../models/header.model';

@Injectable()
export class HeaderService {

  constructor(private readonly http: HttpClient,
              private configService: ConfigService) {
  }

  getHeader(): Observable<Header> {

    return this.http.get<Header>(`${this.configService.getValue('restUrl')}/header`);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {mapTo, tap} from 'rxjs/operators';

export interface Config {
  restUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuration: Config = {};

  constructor(private readonly http: HttpClient) {
  }

  load(): Observable<void> {
    return this.http.get('/assets/config/config.json')
      .pipe(
        tap((configuration: Config) => this.configuration = configuration),
        mapTo(undefined),
      );
  }

  getValue(key: string): any {
    return this.configuration[key];
  }
}

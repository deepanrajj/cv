import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './pages/about/about.component';
import {HeaderModule} from '../../core/header/header.module';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './services/config.service';
import {CvService} from './services/cv.service';
import {TimelineModule} from '../../core/timeline/timeline.module';
import {ProgressCircleModule} from '../../core/progress-circle/progress-circle.module';
import {CollectionModule} from '../../core/collection/collection.module';
import {ReactiveFormsModule} from '@angular/forms';

export function initApp(configService: ConfigService): () => Promise<void> {
  return () => configService.load().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    TimelineModule,
    ProgressCircleModule,
    CollectionModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [ConfigService]
    },
    CvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

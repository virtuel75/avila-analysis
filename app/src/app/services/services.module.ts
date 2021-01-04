import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { API_BASE_URL, PredictorService } from './predictor.service';
import { WindowService } from './window.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    WindowService,
    PredictorService,
    {
      provide: API_BASE_URL, useValue: environment.api_base_url
    }
  ]
})
export class ServicesModule { }

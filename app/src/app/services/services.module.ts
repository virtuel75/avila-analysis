import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PredictorService } from './predictor.service';
import { WindowService } from './window.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    WindowService,
    PredictorService
  ]
})
export class ServicesModule { }

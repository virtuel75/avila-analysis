import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }

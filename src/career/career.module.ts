import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';


@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }

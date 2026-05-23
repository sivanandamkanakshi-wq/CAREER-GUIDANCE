import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../home/home.module';
import { CareerModule } from '../career/career.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HomeModule,
    CareerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

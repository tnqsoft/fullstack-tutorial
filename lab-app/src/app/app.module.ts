import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { Demo1Component } from './shared/demo1/demo1.component';
import {FormsModule} from '@angular/forms';
import { Demo2Component } from './shared/demo2/demo2.component';
import {DemoServiceService} from '@app/shared/services/demo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: DemoServiceService, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

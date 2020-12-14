import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo3Component } from './demo3/demo3.component';
import {Demo3RoutingModule} from '@app/demo3/demo3-routing.module';



@NgModule({
  declarations: [Demo3Component],
  imports: [
    CommonModule,
    Demo3RoutingModule
  ]
})
export class Demo3Module { }

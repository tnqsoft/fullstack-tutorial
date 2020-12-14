import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Demo3Component} from '@app/demo3/demo3/demo3.component';

const routes: Routes = [
  { path: '', component: Demo3Component },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo3RoutingModule { }

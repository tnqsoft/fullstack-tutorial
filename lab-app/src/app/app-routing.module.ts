import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '@app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'demo3',
    loadChildren: () => import('@app/demo3/demo3.module').then(m => m.Demo3Module)
  },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

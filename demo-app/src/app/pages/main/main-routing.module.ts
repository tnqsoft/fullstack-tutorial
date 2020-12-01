import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/shared/auth/auth.guard';
import { MainComponent } from './main.component';
import {CategoryAddComponent} from '@app/pages/main/components/category-add/category-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: MainComponent },
      { path: 'add', component: CategoryAddComponent },
      // { path: 'transfer', loadChildren: './pages/transfer/transfer.module#TransferModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

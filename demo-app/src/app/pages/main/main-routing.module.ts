import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/shared/auth/auth.guard';
import { MainComponent } from './main.component';
import {CategoryAddComponent} from '@app/pages/main/components/category-add/category-add.component';
import {CategoryListComponent} from '@app/pages/main/components/category-list/category-list.component';
import {CategoryDetailComponent} from '@app/pages/main/components/category-detail/category-detail.component';
import {TodoListComponent} from '@app/pages/main/components/todo-list/todo-list.component';
import {TodoAddComponent} from '@app/pages/main/components/todo-add/todo-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CategoryListComponent },
      { path: 'add', component: CategoryAddComponent },
      {
        path: ':id',
        component: CategoryDetailComponent,
        children: [
          { path: '', redirectTo: 'todo/list', pathMatch: 'full' },
          { path: 'todo/list', component: TodoListComponent },
          { path: 'todo/add', component: TodoAddComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

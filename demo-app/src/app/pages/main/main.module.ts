import { NgModule } from '@angular/core';
import { MainComponent } from '@app/pages/main/main.component';
import { CategoryItemComponent } from './shared/category-item/category-item.component';
import {MainRoutingModule} from '@app/pages/main/main-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

@NgModule({
  declarations: [
    MainComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryDetailComponent,
    TodoListComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    MainRoutingModule,
  ],
  exports: [
    SharedModule,
    MainComponent
  ]
})
export class MainModule {}

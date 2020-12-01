import { NgModule } from '@angular/core';
import { MainComponent } from '@app/pages/main/main.component';
import { CategoryItemComponent } from './shared/category-item/category-item.component';
import {MainRoutingModule} from '@app/pages/main/main-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import { CategoryAddComponent } from './components/category-add/category-add.component';

@NgModule({
  declarations: [
    MainComponent,
    CategoryItemComponent,
    CategoryAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MainRoutingModule,
  ],
  exports: [
    SharedModule,
    MainComponent
  ]
})
export class MainModule {}

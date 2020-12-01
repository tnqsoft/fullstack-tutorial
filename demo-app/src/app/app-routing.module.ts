import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/pages/login/login.component';
import { AuthGuard } from '@app/shared/auth/auth.guard';
import { MainComponent } from '@app/pages/main/main.component';

const routes: Routes = [
  // { path: '', loadChildren: './pages/main/main.module#MainModule' },
  {
    path: 'category',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

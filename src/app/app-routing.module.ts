import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KewpaComponent } from './kewpa/kewpa.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'kewpa', component:KewpaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

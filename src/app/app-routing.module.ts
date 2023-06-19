import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdvlistComponent } from './rdvlist/rdvlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   {path: '', component: RdvlistComponent }, //by default path
   {path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

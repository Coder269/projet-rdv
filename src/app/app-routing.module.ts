import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdvlistComponent } from './rdvlist/rdvlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
   {path: '', component: CalendarComponent },
   {path: 'calendar', component: CalendarComponent }, //by default path
   {path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

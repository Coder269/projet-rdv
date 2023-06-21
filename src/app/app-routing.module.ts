import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
   {path: '', component: CalendarComponent, canActivate: [authGuard] },
   {path: 'calendar', component: CalendarComponent, canActivate: [authGuard] }, //by default path
   {path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

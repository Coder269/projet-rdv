import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdvlistComponent } from './rdvlist/rdvlist.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditrdvComponent } from './editrdv/editrdv.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuCalendarComponent } from './side-bar/menu-calendar/menu-calendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    RdvlistComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    EditrdvComponent,
    SideBarComponent,
    MenuCalendarComponent,
    CalendarComponent,
      ReservationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

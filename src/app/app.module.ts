import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdvlistComponent } from './rdvlist/rdvlist.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditrdvComponent } from './editrdv/editrdv.component';

@NgModule({
  declarations: [
    AppComponent,
    RdvlistComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    EditrdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

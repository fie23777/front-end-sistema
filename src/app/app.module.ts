import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginModule} from './autenticacao/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import {LoginRouting} from './autenticacao/login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRouting,
    

    AppRoutingModule //Modulo root da apilicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

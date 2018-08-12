import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms'
import {
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatListModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './components/login/login.component';
import { Logar } from './components/logar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,

    ReactiveFormsModule
    
  ],
  declarations: [
     LoginComponent,
     Logar
    ]
})
export class LoginModule { }

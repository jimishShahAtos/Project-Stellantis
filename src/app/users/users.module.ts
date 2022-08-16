import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UsersComponent } from './users.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    UsersComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

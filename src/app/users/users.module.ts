import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    UsersComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

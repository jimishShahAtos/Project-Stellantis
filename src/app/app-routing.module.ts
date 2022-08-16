import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './docg-app/pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: '**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

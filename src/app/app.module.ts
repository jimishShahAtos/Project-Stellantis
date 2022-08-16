import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocgAppModule } from './docg-app/docg-app.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    UsersModule,
    DocgAppModule,
    DocgAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

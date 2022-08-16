import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../sso.config';

@Component({
  selector: 'docg-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    // call the function for configureSingleOn
    this.configureSingleSignOn();
  }

  ngOnInit(): void {
  }

  configureSingleSignOn(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  

  login():void{
    this.oauthService.initImplicitFlow();
  }

  logout():void{
    this.oauthService.logOut();
    // this.oauthService.initImplicitFlow();
  }

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}

import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/app/sso.config';



@Component({
  selector: 'docg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

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

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}

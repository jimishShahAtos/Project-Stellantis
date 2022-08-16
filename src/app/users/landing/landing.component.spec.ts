import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(() => {
    const oAuthServiceStub = () => ({
      configure: (authConfig: any) => ({}),
      tokenValidationHandler: {},
      loadDiscoveryDocumentAndTryLogin: () => ({}),
      initImplicitFlow: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LandingComponent],
      providers: [{ provide: OAuthService, useFactory: oAuthServiceStub }]
    });
    spyOn(LandingComponent.prototype, 'configureSingleSignOn');
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(
        LandingComponent.prototype.configureSingleSignOn
      ).toHaveBeenCalled();
    });
  });

  describe('configureSingleSignOn', () => {
    it('makes expected calls', () => {
      const oAuthServiceStub: OAuthService = fixture.debugElement.injector.get(
        OAuthService
      );
      spyOn(oAuthServiceStub, 'configure').and.callThrough();
      spyOn(
        oAuthServiceStub,
        'loadDiscoveryDocumentAndTryLogin'
      ).and.callThrough();
      (<jasmine.Spy>component.configureSingleSignOn).and.callThrough();
      component.configureSingleSignOn();
      expect(oAuthServiceStub.configure).toHaveBeenCalled();
      expect(
        oAuthServiceStub.loadDiscoveryDocumentAndTryLogin
      ).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const oAuthServiceStub: OAuthService = fixture.debugElement.injector.get(
        OAuthService
      );
      spyOn(oAuthServiceStub, 'initImplicitFlow').and.callThrough();
      component.login();
      expect(oAuthServiceStub.initImplicitFlow).toHaveBeenCalled();
    });
  });
});

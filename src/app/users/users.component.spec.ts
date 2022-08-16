import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    const oAuthServiceStub = () => ({
      configure: (_authConfig: any) => ({}),
      tokenValidationHandler: {},
      loadDiscoveryDocumentAndTryLogin: () => ({}),
      initImplicitFlow: () => ({}),
      logOut: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UsersComponent],
      providers: [{ provide: OAuthService, useFactory: oAuthServiceStub }]
    });
    spyOn(UsersComponent.prototype, 'configureSingleSignOn');
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(UsersComponent.prototype.configureSingleSignOn).toHaveBeenCalled();
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

  describe('logout', () => {
    it('makes expected calls', () => {
      const oAuthServiceStub: OAuthService = fixture.debugElement.injector.get(
        OAuthService
      );
      spyOn(oAuthServiceStub, 'logOut').and.callThrough();
      component.logout();
      expect(oAuthServiceStub.logOut).toHaveBeenCalled();
    });
  });
});

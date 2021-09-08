import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../authCodeFlowConfig';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit(): void {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    console.log("Login");
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.initCodeFlow();
  }

  get token(): any{
    let claims = this.oauthService.getIdentityClaims();
    if(claims){
      console.log("claims");
      console.log(claims);
     //navigate here 
    }

    return claims? claims: null;
  }

  
  logout(){
    debugger;
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
  }
}

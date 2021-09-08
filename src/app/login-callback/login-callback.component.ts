import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) { }
  claims:any;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    debugger;
    setTimeout(()=>{
      this.claims = this.oauthService.getIdentityClaims();
      console.log("claims");
      console.log(this.claims);
     //navigate here 
     if(this.claims.role =='admin'){
       this.router.navigate(['request-list']);
     }
     else if(this.claims.role =='student'){
      this.router.navigate(['student']);
     }else{
      this.router.navigate(['supervisor']);
     }
  
    },1000)
   }
  get token(){
    let claims = this.oauthService.getIdentityClaims();
    if(claims){
      console.log("claims");
      console.log(claims);
     //navigate here 
    }

    return claims? claims: null;
  }

  
  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
  }
}

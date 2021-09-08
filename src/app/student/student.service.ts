import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  endPoint = 'http://localhost:5000/users';

  constructor(private httpClient: HttpClient, private oauthService: OAuthService) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
    })
  }  

  isApproved(): Observable<boolean> {
    debugger;
    var claims:any = this.oauthService.getIdentityClaims();
    return this.httpClient.get<boolean>(this.endPoint + `/isApproved?userId=${claims.sub}`, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error:any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
  //  console.log(msg);
    return throwError(msg);
  }

}

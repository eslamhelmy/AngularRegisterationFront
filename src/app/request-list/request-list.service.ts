import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RequestViewModel } from './request-view-model';

@Injectable({
  providedIn: 'root'
})
export class RequestListService {

  endPoint = 'http://localhost:5000/users';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,
     // 'Authorization': localStorage.getItem("token") as string
    })
  }  

  update(userId:string): Observable<boolean>{
    return this.httpClient.put<boolean>(this.endPoint + `/${userId}`,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  
  }
  getRequests(): Observable<RequestViewModel[]> {
    return this.httpClient.get<RequestViewModel[]>(this.endPoint, this.httpHeader)
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

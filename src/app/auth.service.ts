import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/get_token`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error)
}

  private setToken(response) {
    if (!response) {
      console.error("Response is null")
      localStorage.clear();
    } else {
      localStorage.setItem('hs-token', response.token);
    }
  }

  get token() {
    return localStorage.getItem('hs-token');
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated() {
    return !!this.token
  }
  

}
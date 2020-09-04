import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(User) {
    return this.http.post(`${environment.apiUrl}/get_token`, User)
      .pipe(
        tap(this.setToken)
      )
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
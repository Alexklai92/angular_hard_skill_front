import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        private router: Router

    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setParams: {
                    auth: this.auth.token
                }
            })
        }

        return next.handle(req)
            .pipe(
                catchError(error => {
                    if (error.status == 500) {
                        console.error("FATAL! API responsed 500 status code")
                        this.auth.logout()
                        this.router.navigate(['/'])
                    }
                    if (error.status == 401 || error.status == 403) {
                        this.auth.logout()
                        this.router.navigate(['/admin', 'login'])
                        console.log('error 401')
                    }
                    return throwError(error)
                })
            )
    }
}
import { HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/observable';

export class AuthInterceptor implements HttpInterceptor {
    private getToken() {
        let access_token: string;

        localStorage.getItem('currentUser')
            ? access_token = JSON.parse(localStorage.getItem('currentUser')).access_token
            : access_token = '';

        return access_token;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = request.clone({
            headers: request.headers.set('Authorization', "Bearer " + this.getToken())
        });

        return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    console.log('forbidden');
                    localStorage.clear();
                    window.location.reload();
                }
            }
        });
    }
}
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/common/authentication.service";



@Injectable()

export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService:AuthenticationService){


    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUser = this.authenticationService.currentUserValue;

        if(currentUser && currentUser.token){
            req = req.clone({
                setHeaders: {
                    Authorization:`Bearer ${currentUser.token}`
                }
            })
        }
        return next.handle(req);
    }

}
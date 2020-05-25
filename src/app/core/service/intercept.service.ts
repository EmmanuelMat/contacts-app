import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor() {
console.log(environment.apiBaseUrl);

   }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler):
    Observable<HttpEvent<any>> {
    const setHeaders: { [name: string]: string | string[] } = {};
      setHeaders["Content-Type"] = "application/json";
      setHeaders["Accept"] = `application/json`;
    req = req.clone({
      url:` ${environment.apiBaseUrl}/${req.url}`
    })

    return next.handle(req).pipe(
      tap( (event) => {
        if(event instanceof HttpResponse)
        console.log(event)
      },
       (error) => {
          console.error(error);
       })
    )

  }

}


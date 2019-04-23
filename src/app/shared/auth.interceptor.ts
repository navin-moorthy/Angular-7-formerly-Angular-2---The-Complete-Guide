import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const copiedReq = req.clone({ params: req.params.set("auth", token) });
    return next.handle(copiedReq);
  }
}

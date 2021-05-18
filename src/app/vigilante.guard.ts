import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private cookie: CookieService, private ruta: Router) { }

  redirect(valor) {
    if (!valor) {
      this.ruta.navigate(['/', 'login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookieU = this.cookie.check('access');
    //  this.redirect(cookieU);
    if (!cookieU) {
      this.ruta.navigate(['/', 'login']);
    }
    return cookieU;
  }


}

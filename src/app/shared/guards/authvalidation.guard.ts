import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthserviceService } from "src/app/services/authservice.service";
import { map, take } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthvalidationGuard implements CanActivate {
  constructor(private auth: AuthserviceService, private route: Router) {}
  canActivate(): Observable<boolean> {
    return this.auth.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => {
        if (!isLogged) {
          this.route.navigate(["/login"]);
          return false;
        }
        return true;
      })
    );
  }
}

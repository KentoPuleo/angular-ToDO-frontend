import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AuthState} from "./reducer";
import {select, Store} from "@ngrx/store";
import {isLoggedIn} from "./auth.selectors";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private store: Store<AuthState>,
              private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigateByUrl('/login')
          }
        })
      )
  }
}


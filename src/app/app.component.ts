import { Component, Input, OnInit } from '@angular/core';
import {getAllUser} from "./httprequest-user";
import {select, Store} from '@ngrx/store';
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthState} from "./components/auth/reducer";
import {isLoggedIn, isLoggedOut} from "./components/auth/auth.selectors";
import {AppState} from "./reducers";
import {login, logout } from './components/auth/auth.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() point!: string;

  isLoggedIn$: Observable<boolean> | undefined;

  isLoggedOut$: Observable<boolean> | undefined;

  constructor(private router: Router, private store: Store<AppState>) {  }

  ngOnInit(): void {
    /*
    const navList = document.querySelector("#nav-list") as HTMLBodyElement
    const navLogin = document.querySelector("#nav-login") as HTMLBodyElement
    const navDone = document.querySelector("#nav-done") as HTMLBodyElement
    const navTest = document.querySelector("#nav-test") as HTMLBodyElement
    */

    const userProfile = localStorage.getItem("user");

    if (userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile)}));
    }

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );


/*
    let login = sessionStorage.getItem("login");
    if (login === "true"){
      this.login = true;
      console.log("Am I logged in? ", this.login);
      navList.style.display = "block"
      navDone.style.display = "block"
      navTest.style.display = "block"
      console.log("display none")
      navLogin.style.display = "none"

    }
 */
  }

  logout(){
    this.store.dispatch(logout());
  }
}


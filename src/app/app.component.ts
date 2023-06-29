import { Component, Input, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
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

  title: string = 'todoapp';

  constructor(private router: Router, private store: Store<AppState>) {  }

  ngOnInit(): void {

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

  }

  logout(){
    this.store.dispatch(logout());
  }
}


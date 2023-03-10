import { Component, Input, OnInit } from '@angular/core';
import {getAllUser} from "./httprequest-user";
import {select, Store} from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() point!: string;

  login: boolean = false;

  ngOnInit(): void {
    const navList = document.querySelector("#nav-list") as HTMLBodyElement
    const navLogin = document.querySelector("#nav-login") as HTMLBodyElement
    const navDone = document.querySelector("#nav-done") as HTMLBodyElement
    const navTest = document.querySelector("#nav-test") as HTMLBodyElement

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
  }

  logout(){
    sessionStorage.setItem("login", "false")
  }
}


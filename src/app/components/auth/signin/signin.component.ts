import {Component, OnInit} from '@angular/core';
import {getAllUser} from "../../../httprequest-user";
import {UserModul} from "../../../model/user.modul";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: UserModul[] = [];

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.user = await getAllUser();
  }

  login() {


    /*
    let name = document.getElementById('name') as HTMLInputElement;
    let passwort = document.getElementById('pass') as HTMLInputElement;
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].name === name?.value && this.user[i].password === passwort?.value) {
        console.log(this.user[i].name)
        console.log(this.user[i].password)
        alert("Username angemeldet")
        sessionStorage.setItem("login", "true")
        break;
        location.reload();
      }
    }*/
  }
}

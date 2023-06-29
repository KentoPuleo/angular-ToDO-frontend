import { Component, OnInit } from '@angular/core';
import {addTask, getAllTask} from "../../../httpclient-task";
import {addUser, getAllUser} from "../../../httprequest-user";
import { UserModul} from "../../../model/user.modul";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModul[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.user = await getAllUser();
    this.user.forEach(function (item){
      console.log(item)
    });
    console.log(this.user[0]);
  }

  check(){
    let name = document.getElementById('name') as HTMLInputElement;
    let email = document.getElementById('email') as HTMLInputElement;
    let passwort = document.getElementById('pass') as HTMLInputElement;
    this.user.forEach(function (item){
      if ( item.name === name?.value){
        alert("Username bereits vorhanden")
        return;
      }
      if ( item.email === email?.value){
        alert("Email bereits vorhanden")
        return;
      }
    });
    addUser(name?.value, email?.value, passwort?.value);
    alert("User successfully added");
  }
}

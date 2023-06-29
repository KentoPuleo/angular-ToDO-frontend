import {Component, OnInit} from '@angular/core';
import {getAllUser} from "../../../httprequest-user";
import {UserModul} from "../../../model/user.modul";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthState} from "../reducer";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: UserModul[] = [];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>) {
    this.form = fb.group({
      name: ['Kento', [Validators.required]],
      password: ['123456789', [Validators.required]]
    });
  }

  async ngOnInit(): Promise<void> {
    this.user = await getAllUser();
  }

  login() {
    let name = document.getElementById('name') as HTMLInputElement;
    let passwort = document.getElementById('pass') as HTMLInputElement;
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].name === name?.value && this.user[i].password === passwort?.value) {
        console.log(this.user[i].name)
        console.log(this.user[i].password)
        alert("Username angemeldet")
        sessionStorage.setItem("login", "true")
        this.router.navigateByUrl('/list');
        break;
        location.reload();
      } else {
        console.log("Login failed, user not found")
      }
    }
  }
}

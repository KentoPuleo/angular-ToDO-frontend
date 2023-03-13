import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModul} from "../../model/user.modul";


@Injectable()
export class AuthService {

  constructor(private http:HttpClient) {

  }

  login(email:string, password:string): Observable<UserModul> {
    return this.http.post<UserModul>('/api/login', {email,password});
  }

}

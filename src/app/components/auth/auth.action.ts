import {createAction, props} from '@ngrx/store';
import {UserModul} from "../../model/user.modul";


export const login = createAction(
  "[Login Page] User Login",
  props<{user: UserModul}>()
);



export const logout = createAction(
  "[Top Menu] Logout"
);

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./reducer";

export const selectAuthState = createFeatureSelector<AuthState>("auth")


export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user//Einmal ! bedeutet false und zweimal bedeutet true
)

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)

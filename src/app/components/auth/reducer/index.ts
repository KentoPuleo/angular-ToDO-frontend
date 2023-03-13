import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import {environment} from "../../../../environments/environment";
import {UserModul} from "../../../model/user.modul";
import {AuthActions} from "../action-types";
import {
  getUndecoratedClassWithAngularFeaturesDiagnostic
} from "@angular/compiler-cli/src/ngtsc/annotations/src/diagnostics";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserModul | undefined
}

export const intitialAuthState: AuthState = {

  user: undefined
}

export const authReducer = createReducer(
  intitialAuthState,
  on(AuthActions.login, (state, action) => {

    console.log("Calling login reducer")

    return {
      user:action.user
    }
  })
);

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];

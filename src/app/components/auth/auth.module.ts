import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth.service";
import * as fromAuth from './reducer';
import {AuthGuard} from "./auth.guard";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth.effects";
import {SigninComponent} from "./signin/signin.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{path: '', component: SigninComponent}]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer, { metaReducers: fromAuth.metaReducers }),
    EffectsModule.forRoot([AuthEffects])

  ],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})

export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}

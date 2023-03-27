import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ListComponent} from "./list/list.component";
import * as fromMain from './reducers';
import {mainReducer} from "./main.reducer";
import {EffectsModule} from "@ngrx/effects";
import {MainEffects} from "./main.effects";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild([{path: 'list', component: ListComponent}]),
    StoreModule.forFeature("main", mainReducer),
    EffectsModule.forFeature([MainEffects])
  ]
})
export class MainModule { }

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MainState} from "./main.state";

export const selectMainState = createFeatureSelector<MainState>("main")

export const selectTasks = createSelector(selectMainState, (state:MainState) => state.tasks)

export const selectTaskId = createSelector(selectMainState, (state:MainState) => state.selectedTaskId)


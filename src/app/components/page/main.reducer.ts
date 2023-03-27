import {MainState} from "./main.state";
import {createReducer, on} from "@ngrx/store";
import {getAllTasks, getAllTasksFailed, getAllTasksSuccess} from "./main.action";
import {state} from "@angular/animations";

export const initialState = {
  tasks: [],
  isLoading: false
} as MainState

const _mainReducer = createReducer(
  initialState,
  on(getAllTasks,(state) => ({
    ...state,
      isLoading: true
  })),
  on(getAllTasksSuccess, (state, {tasks}) => ({
    ...state,
    isLoading: false,
    tasks: tasks
  })),
  on(getAllTasksFailed, (state) => ({
    ...state,
    isLoading: false
  }))
)

export function mainReducer(state: any, action: any) {
  return _mainReducer(state, action)
}

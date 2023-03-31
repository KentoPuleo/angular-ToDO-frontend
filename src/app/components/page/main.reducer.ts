import {MainState} from "./main.state";
import {createReducer, on} from "@ngrx/store";
import {
  addTask,
  addTaskFailed,
  addTaskSuccess,
  getAllTasks,
  getAllTasksFailed,
  getAllTasksSuccess, removeTask, removeTaskFailed, removeTaskSuccess
} from "./main.action";
import {state} from "@angular/animations";

export const initialState = {
  tasks: [],
  isLoading: false,
  taskName: ""
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
  })),

  on(addTask, (state) =>({
    ...state,
    isLoading: true
  })),
  on(addTaskSuccess, (state) =>({
    ...state,
    isLoading: false
  })),
  on(addTaskFailed, (state) =>({
    ...state,
    isLoading: false
  })),

  on(removeTask, (state) => ({
    ...state,
    isLoading: true
  })),
  on(removeTaskSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(removeTaskFailed, (state) => ({
    ...state,
    isLoading: false
  })),
)

export function mainReducer(state: any, action: any) {
  return _mainReducer(state, action)
}

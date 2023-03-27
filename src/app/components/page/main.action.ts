import {createAction, props} from "@ngrx/store";
import {ListModel} from "../../model/list.model";

export const getAllTasks = createAction(
  "[List Page] GET ALL TASK"
)

export const getAllTasksSuccess = createAction(
  "[List Page] GET ALL TASK SUCCESS",
  props<{tasks: ListModel[]}>()
)

export const getAllTasksFailed = createAction(
  "[List Page] GET ALL TASK Failed"
)

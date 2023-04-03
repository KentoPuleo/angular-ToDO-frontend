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



export const addTask = createAction(
  "[List Page] ADD TASK",
)

export const addTaskSuccess = createAction(
  "[List Page] ADD TASK SUCCESS"
)

export const addTaskFailed = createAction(
  "[List Page] ADD TASK FAILED"
)

export const setSelectedId = createAction(
  "[List Page] SET TASK ID",
  props<{selectedTaskId: number}>()
)

export const removeTask = createAction(
  "[List Page] REMOVE TASK",
)

export const removeTaskSuccess = createAction(
  "[List Page] REMOVE TASK SUCCESS"
)

export const removeTaskFailed = createAction(
  "[List Page] REMOVE TASK FAILED"
)

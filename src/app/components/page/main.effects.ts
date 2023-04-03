import {Injectable} from "@angular/core";
import {MainHttpService} from "./main.http-service";
import {
  getAllTasks,
  getAllTasksSuccess,
  getAllTasksFailed,
  addTask,
  addTaskSuccess,
  addTaskFailed,
  removeTask, removeTaskSuccess, removeTaskFailed
} from "./main.action";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, tap, switchMap, withLatestFrom} from 'rxjs/operators';
import {map, of, throwError} from "rxjs";
import {ListModel} from "../../model/list.model";
import {catchError} from "rxjs/operators";
import {MainStoreService} from "./main.store.service";
import {selectTaskId} from "./main.selectors";

@Injectable()
export class MainEffects {
  constructor(
    private mainHttpService: MainHttpService,
    private mainStoreService: MainStoreService,
    private actions$: Actions) {
  }

  getAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTasks),
      mergeMap(() =>
        this.mainHttpService.getAllTasks().pipe(map((response: ListModel[]) =>
          getAllTasksSuccess({tasks: response})), catchError(() => of(getAllTasksFailed)))
      )
    )
  )

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap(() =>
        this.mainHttpService.addTask().pipe(map(() =>
          addTaskSuccess()), catchError(() => of(addTaskFailed)))
      )
    )
  )

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTask),
      withLatestFrom(this.mainStoreService.selectTaskId()),
      switchMap((_,selectedTaskId: number) =>
        this.mainHttpService.removeTask(selectedTaskId).pipe(map(() =>
          removeTaskSuccess()), catchError(() => of(removeTaskFailed))
        )
      )
    )
  )
}

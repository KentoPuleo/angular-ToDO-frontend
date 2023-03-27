import {Injectable} from "@angular/core";
import {MainHttpService} from "./main.http-service";
import {getAllTasks, getAllTasksSuccess, getAllTasksFailed} from "./main.action";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, tap} from 'rxjs/operators';
import {map, of, throwError} from "rxjs";
import {ListModel} from "../../model/list.model";
import {catchError} from "rxjs/operators";

@Injectable()
export class MainEffects {
  constructor(
    private mainHttpService: MainHttpService,
    private actions$: Actions) {
  }

  getAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTasks),
      mergeMap(() =>
        this.mainHttpService.getAllTasks().pipe(map((response: ListModel[]) =>
          getAllTasksSuccess({tasks: response})), catchError(() => of(getAllTasksFailed)))
      )
    ),
    { dispatch: true }
  )
}
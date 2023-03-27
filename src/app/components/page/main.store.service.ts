import {Store} from "@ngrx/store";
import {MainState} from "./main.state";
import {getAllTasks} from "./main.action";
import {selectTasks} from "./main.selectors";
import {Observable} from "rxjs";
import {ListModel} from "../../model/list.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class MainStoreService{
  constructor(private store: Store<MainState>) {
  }

  getTasks(){
    this.store.dispatch(getAllTasks())
  }

  selectAllTasks(): Observable<ListModel[]>{
    return this.store.select(selectTasks)
  }
}

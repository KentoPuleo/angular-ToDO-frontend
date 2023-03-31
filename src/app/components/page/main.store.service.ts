import {Store} from "@ngrx/store";
import {MainState} from "./main.state";
import {getAllTasks,addTask, removeTask} from "./main.action";
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

  addTask(){
    console.log("service zu addTask betreten")
    this.store.dispatch(addTask())
  }

  removeTask(){
    this.store.dispatch(removeTask())
  }
}

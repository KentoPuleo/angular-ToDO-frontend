import { Component, OnInit } from '@angular/core';
import {addTask, getOneTask, getAllTask, removeTask, list, updateTask} from "../../../httpclient-task";
import {ListModel} from "../../../model/list.model";
import {MainStoreService} from "../main.store.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: ListModel[] = [];
  listactive: ListModel[] = [];

  constructor(private mainStoreService: MainStoreService ) { }

  ngOnInit() {
    this.mainStoreService.selectAllTasks().subscribe(value => this.list= value)
    this.mainStoreService.getTasks()
    console.log(list)
  }


  add(){
    console.log("add task button triggered")
    this.mainStoreService.addTask()
  }


  delete(id: string){
    console.log("delete task button triggered")
    let selectedId = parseInt(id)
    console.log(id)
    console.log(selectedId)
    this.mainStoreService.setTaskId(selectedId)
    this.mainStoreService.removeTask()
 }

  done(param: string){
    updateTask(parseInt(param));
  }
}

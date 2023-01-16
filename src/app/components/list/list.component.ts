import { Component, OnInit } from '@angular/core';
import {addTask, getOneTask, getAllTask, removeTask, list, updateTask} from "../../httpclient-task";
import {ListModel} from "../../model/list.model";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: ListModel[] = [];
  listactive: ListModel[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.list = await getAllTask();
    this.list.forEach(task => {
      if (task.status == true){
        this.listactive.push(task);
      }
    });
  }

  add(){
    let param = document.getElementById('taskname') as HTMLInputElement;
    addTask(param?.value);
  }


  delete(param: string){
    removeTask(parseInt(param));
  }

  done(param: string){
    updateTask(parseInt(param));
  }

}

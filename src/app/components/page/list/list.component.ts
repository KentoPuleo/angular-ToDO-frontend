import { Component, OnInit } from '@angular/core';
import {addTask, getOneTask, getAllTask, removeTask, list, updateTask} from "../../../httpclient-task";
import {ListModel} from "../../../model/list.model";
import {MainStoreService} from "../main.store.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: ListModel[] = [];
  listactive: ListModel[] = [];

  constructor(private mainStoreService: MainStoreService ) { }

  /*
  async ngOnInit(): Promise<void> {
    this.list = await getAllTask();
    this.list.forEach(task => {
      if (task.status == true){
        this.listactive.push(task);
      }
    });
  }
   */

  ngOnInit() {
    this.mainStoreService.selectAllTasks().subscribe(value => this.list= value)
    this.mainStoreService.getTasks()
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

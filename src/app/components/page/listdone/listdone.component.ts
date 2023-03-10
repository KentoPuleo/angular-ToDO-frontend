import { Component, OnInit } from '@angular/core';
import {getAllTask, removeTask} from "../../../httpclient-task";
import {ListModel} from "../../../model/list.model";

@Component({
  selector: 'app-listdone',
  templateUrl: './listdone.component.html',
  styleUrls: ['./listdone.component.css']
})
export class ListdoneComponent implements OnInit {
  list: ListModel[] = [];
  listdone: ListModel[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.list = await getAllTask();
    this.list.forEach(task => {
      if (task.status == false){
        this.listdone.push(task);
      }
    })
    if (this.listdone.length === 0){
      console.log("no task done");
      const showmessage = document.querySelector(".show-message") as HTMLBodyElement
      showmessage.style.display = "block";
    }
  }

  delete(param: string){
    removeTask(parseInt(param));
  }

  done(){

  }

}

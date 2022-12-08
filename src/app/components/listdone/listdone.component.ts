import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdone',
  templateUrl: './listdone.component.html',
  styleUrls: ['./listdone.component.css']
})
export class ListdoneComponent implements OnInit {
  title = 'todoapp';
  counterac: number = 0;
  counterdn: number = 0;
  listactive: string[] = [];
  listdone: string[] = [];
  counteractive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  active(currentElementOfList: any, index: any){
    console.log("Change");
    this.listactive[this.counterac] = currentElementOfList;
    this.listdone.splice(index, 1);
    this.counterdn --;
    this.counterac ++;
  }

}

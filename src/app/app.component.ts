import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() point!: string;
  title = 'todoapp';
  counterac: number = 0;
  counterdn: number = 0;
  listactive: string[] = [];
  listdone: string[] = [];
  counteractive: boolean = false;

  add(){
    //content von liste ist title + this.counter
    if (this.listactive[this.counterac] !== null || '' ) {
      this.listactive[this.counterac] = "task " + (this.counterac + 1);
    }
    this.counterac += 1;
    console.log(this.counterac)
    console.log(this.listactive)
    if (this.counterac === 0){
      this.counteractive = true;
    } else {
      this.counteractive = false;
    }
  }

  delete(currentElementOfList: any, index: any){
    this.counterac -= 1;
    console.log(this.listactive)
    this.listactive[this.counterac]
    this.listactive.splice(index, 1);
    console.log(this.listactive)
  }

  done(currentElementOfList: any, index: any){
    console.log("Change");
    this.listdone[this.counterdn] = currentElementOfList;
    this.listactive.splice(index, 1);
    this.counterdn ++;
    this.counterac --;
  }
}

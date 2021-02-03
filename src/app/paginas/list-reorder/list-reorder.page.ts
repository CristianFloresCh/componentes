import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  usuarios:string[]=[
    'Homero','Marge','Lisa','Bart','Maggie'
  ]
  reorderDisable:Boolean=true;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event);
    const itemMove = this.usuarios.splice(event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to, 0 , itemMove);
    event.detail.complete();
    console.log(this.usuarios);
  }
}

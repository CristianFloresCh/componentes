import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  customoptions:any;

  constructor() {
    this.customoptions = {
      buttons:[{
        text:"Guardar",
        handler: (event)=>{
          console.log("Datos guardados");
          console.log(event);
        }
      },
      {
        text:"Cancelar",
        handler: (event)=>{
          console.log("Cancelado");
          console.log(event);
        }
      }
      ]
    }
   }

  ngOnInit() {
  }
  cambioFecha(event){
    console.log(event);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  datos=[
    {
      nombre: "primary",
      selector: false
    },
    {
      nombre: "secondary",
      selector: false
    },
    {
      nombre: "tertiary",
      selector: true
    }
  ]
  datosb=[
    {
      nombre: "danger",
      selector: true
    },
    {
      nombre: "warning",
      selector: true
    },
    {
      nombre: "success",
      selector: false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

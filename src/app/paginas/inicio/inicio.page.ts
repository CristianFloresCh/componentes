import { Component, OnInit } from '@angular/core';

interface Componente{
    icon,
    nombre,
    direccion
} 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente:Componente[]=[
    {
      icon: "person",
      nombre: "Action Sheet",
      direccion: "/action-sheet",
    },
    {
      icon: "pricetag-outline",
      nombre: "Alert",
      direccion: "/alert",
    },
    {
      icon: "planet",
      nombre: "fab",
      direccion: "/fab",
    },
    {
      icon: "rocket",
      nombre: "Date Time",
      direccion: "/datetime",
    },
    {
      icon: "albums",
      nombre: "Buttons",
      direccion: "/buttons",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

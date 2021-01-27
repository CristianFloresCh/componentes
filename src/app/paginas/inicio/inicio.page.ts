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
    },
    {
      icon: "accessibility-outline",
      nombre: "Avatar",
      direccion: "/avatar",
    },
    {
      icon: "card-outline",
      nombre: "Cards",
      direccion: "/cards",
    },
    {
      icon: "albums-outline",
      nombre: "Slides",
      direccion: "/slides",
    },
    {
      icon: "checkbox-outline",
      nombre: "Check",
      direccion: "/check",
    },
    {
      icon: "grid-outline",
      nombre: "Grid",
      direccion: "/grid",
    },
    {
      icon: "list-outline",
      nombre: "Popover",
      direccion: "/popover",
    },
    {
      icon: "chatbox-outline",
      nombre: "Toast",
      direccion: "/toast",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

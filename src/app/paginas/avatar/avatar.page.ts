import { Component, OnInit } from '@angular/core';

interface avatar {
  icono:string;
  nombre:string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatar:avatar[]=[
    {
      icono: "assets/img/1.jpg",
      nombre: "Primer Avatar"
    },
    {
      icono: "assets/img/2.jpg",
      nombre: "Segundo Avatar"
    },
    {
      icono: "assets/img/3.jpg",
      nombre: "Tercer Avatar"
    },
    {
      icono: "assets/img/4.jpg",
      nombre: "Cuarto Avatar"
    },
    {
      icono: "assets/img/1.jpg",
      nombre: "Primer Avatar"
    },
    {
      icono: "assets/img/2.jpg",
      nombre: "Segundo Avatar"
    },
    {
      icono: "assets/img/3.jpg",
      nombre: "Tercer Avatar"
    },
    {
      icono: "assets/img/4.jpg",
      nombre: "Cuarto Avatar"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

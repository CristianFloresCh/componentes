import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slider = [
    {
      title: "Titulo Avatar1",
      description: "Descripcion Avatar1",
      image: "assets/img/1.jpg",
    },
    {
      title: "Titulo Avatar2",
      description: "Descripcion Avatar2",
      image: "assets/img/2.jpg",
    },
    {
      title: "Titulo Avatar3",
      description: "Descripcion Avatar3",
      image: "assets/img/3.jpg",
    },
    {
      title: "Titulo Avatar4",
      description: "Descripcion Avatar4",
      image: "assets/img/4.jpg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

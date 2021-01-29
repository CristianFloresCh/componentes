import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {

  dato:any[]=Array(20);
  constructor() { }

  ngOnInit() {
  }

}

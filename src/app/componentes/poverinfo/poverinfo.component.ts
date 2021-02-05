import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poverinfo',
  templateUrl: './poverinfo.component.html',
  styleUrls: ['./poverinfo.component.scss'],
})
export class PoverinfoComponent implements OnInit {

  items=Array(10);
  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  onClick(valor){
    this.popoverController.dismiss({
      valor: valor
    });
  }
}

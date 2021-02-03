import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente:Observable<Componente[]>;
  constructor(private dataService:DataService, private menuController:MenuController) { }

  ngOnInit() {
    this.componente=this.dataService.getMenu();
  }
  onClick(){
    this.menuController.open();
  }
}

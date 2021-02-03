import { DataService } from './../../service/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  usuarios:Observable<any>
  @ViewChild(IonList) ionlist:IonList;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.usuarios = this.dataservice.getUsuarios();
    //.subscribe(arg => console.log(arg));
    
  }

  favorito(usuario){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }

  compartir(usuario){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }

  eliminar(usuario){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }
}

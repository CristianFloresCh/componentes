import { PoverinfoComponent } from './poverinfo/poverinfo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    PoverinfoComponent
  ],
  exports: [
    HeaderComponent,
    PoverinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }

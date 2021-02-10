import { AvatarPage } from './../avatar/avatar.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'opciones',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'cuenta',
        loadChildren:()=> import('../avatar/avatar.module').then(m => m.AvatarPageModule) 
      },
      {
        path:'contactos',
        loadChildren:()=> import('../cards/cards.module').then(m => m.CardsPageModule) 
      },
      {
        path:'opciones',
        loadChildren:()=> import('../list-reorder/list-reorder.module').then(m => m.ListReorderPageModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

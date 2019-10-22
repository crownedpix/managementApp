import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ClientsComponent } from './clients.component';
import { StarModule } from '../../components/star/star.module';
const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
   
  }
];
@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    IonicModule,
    StarModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsModule { }

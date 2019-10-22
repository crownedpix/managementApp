import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
   
  }
];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AddClientComponent
  }
];

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AddClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AddFreelancerComponent } from './add-freelancer.component';

const routes: Routes = [
  {
    path: '',
    component: AddFreelancerComponent
  }
];

@NgModule({
  declarations: [AddFreelancerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AddFreelancerModule { }

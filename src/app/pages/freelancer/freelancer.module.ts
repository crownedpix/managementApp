import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerComponent } from './freelancer.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: FreelancerComponent
  }
];

@NgModule({
  declarations: [FreelancerComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerModule { }

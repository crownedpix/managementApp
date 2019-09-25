import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { FreelancersComponent } from './freelancers.component';
import { StarComponent } from '../../components/star/star.component';
const routes: Routes = [
  {
    path: '',
    component: FreelancersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FreelancersComponent, StarComponent]
})
export class FreelancersModule { }

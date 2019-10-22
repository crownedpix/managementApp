import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { FreelancersComponent } from './freelancers.component';
import { StarModule } from '../../components/star/star.module';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: FreelancersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FreelancersComponent]
})
export class FreelancersModule { }

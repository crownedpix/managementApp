import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
   
  }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }

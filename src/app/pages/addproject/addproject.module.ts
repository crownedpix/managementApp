import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddprojectComponent } from './addproject.component';

const routes: Routes = [
  {
    path: '',
    component: AddprojectComponent
  }
];

@NgModule({
  declarations: [AddprojectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AddprojectModule { }

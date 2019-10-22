import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: SkillComponent
  }
];

@NgModule({
  declarations: [SkillComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillModule { }

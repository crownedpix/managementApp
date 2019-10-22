import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { ProjectsComponent } from './projects.component';
import { StarModule } from '../../components/star/star.module';
const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    IonicModule,
    StarModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }

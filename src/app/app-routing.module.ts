import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from '../app/service/authguard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', canActivate:[AuthguardService], loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', canActivate:[AuthguardService],loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', canActivate:[AuthguardService], loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', canActivate:[AuthguardService], loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'freelancers', canActivate:[AuthguardService], loadChildren: './pages/freelancers/freelancers.module#FreelancersModule' },
  { path: 'clients', canActivate:[AuthguardService], loadChildren: './pages/clients/clients.module#ClientsModule' },
  { path: 'projects', canActivate:[AuthguardService], loadChildren: './pages/projects/projects.module#ProjectsModule' },
  { path: 'addproject', canActivate:[AuthguardService], loadChildren: './pages/addproject/addproject.module#AddprojectModule' },
  { path: 'addfreelancer', canActivate:[AuthguardService], loadChildren: './pages/add-freelancer/add-freelancer.module#AddFreelancerModule' },
  { path: 'addclient', canActivate:[AuthguardService], loadChildren: './pages/add-client/add-client.module#AddClientModule' },
  { path: 'project', canActivate:[AuthguardService], loadChildren: './pages/project/project.module#ProjectModule' },
  { path: 'freelancer', canActivate:[AuthguardService], loadChildren: './pages/freelancer/freelancer.module#FreelancerModule' },
  { path: 'client', canActivate:[AuthguardService], loadChildren: './pages/client/client.module#ClientModule' },
  { path: 'skills', canActivate:[AuthguardService], loadChildren: './pages/skill/skill.module#SkillModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}

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
  { path: 'freelancer', canActivate:[AuthguardService], loadChildren: './pages/freelancers/freelancers.module#FreelancersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}

import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from '../app/service/authentication.service'
import { Pages } from './interfaces/pages';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;
  userValue = {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "email": "",
    "roles": "",
    "updated_by": "",
    "created": "",
    "modified": ""
  };
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private authService: AuthenticationService,
    private router: Router,
    private apiService: ApiService,
    private storage: Storage
  ) {
    this.storage.get('c_user').then(data => {
      this.userValue = JSON.parse(data);
    });

    this.appPages = [
      {
        title: 'Home',
        url: 'home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'About',
        url: 'about',
        direct: 'root',
        icon: 'information-circle-outline'
      },
      {
        title: 'Add Freelancer',
        url: 'addfreelancer',
        direct: 'root',
        icon: 'paper-plane'
      },
      {
        title: 'Add Client',
        url: 'addclient',
        direct: 'root',
        icon: 'briefcase'
      },
      {
        title: 'Add Project',
        url: 'addproject',
        direct: 'root',
        icon: 'cube'
      },
      {
        title: 'Add Skills',
        url: 'skills',
        direct: 'root',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  callPage(url) {
    this.router.navigate([url]);
  }



  initializeApp() {
    const self = this;
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        this.apiService.hideLoader();
        if (state) {
          self.apiService.getSkills().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('skills', data['result']);
          });
          self.apiService.getUsers().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('users', data['result']);
          });
          this.apiService.getClients().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('clients', data['result']);
          })
          self.apiService.getCountries().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('countries', data['result']);
          });
          self.apiService.getFreelancers().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('freelancers', data['result']);
          });
          self.apiService.getProjects().subscribe(data => {
            this.apiService.hideLoader();
            self.storage.set('projects', data['result']);
          });
          self.router.navigate(['home-results']);

        }
      })
    }).catch(() => { });
  }


  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/');
  }
}

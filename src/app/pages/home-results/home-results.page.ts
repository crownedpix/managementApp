import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { Platform, Events, IonSelect } from '@ionic/angular';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {

  setCountry() {
    console.log('New country');
  }
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  value = {
    freelancers: 0,
    clients: 0,
    activeprojects: 0,
    projects: 0
  }
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private storage: Storage,
    private router: Router,
    private apiService: ApiService
  ) {

  }


  getValue(val) {
    const total = this.value[val];
    if (total > 0) {
      return total + " listing"
    } else {
      return ''
    }
  }

  ionViewWillEnter() {
    const ionSelects = document.querySelectorAll('ion-select');
    ionSelects.forEach((sel) => {
      sel.shadowRoot.querySelectorAll('.select-icon-inner')
        .forEach((elem) => {
          elem.setAttribute('style', 'display: none;');
        });
    });
    this.menuCtrl.enable(true);
    const self = this;
    this.storage.get('totalRecords').then(val => {
      if (val) {
        self.value = val;
      } else {
        self.storage.set('totalRecords', {
          freelancers: 0,
          projects: 0,
          activeprojects: 0,
          clients: 0
        })
      }
    });

  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  gotoFrees() {
    this.router.navigate(['freelancers']);
  }
  gotoClients() {
    this.router.navigate(['clients']);
  }
  gotoProjects(project) {
    // this.navCtrl.navigateRoot('/projects');
    let navigationExtras: NavigationExtras = {
      state: {
        projectType: project
      }
    };
    this.router.navigate(['projects'], navigationExtras);
  }



}

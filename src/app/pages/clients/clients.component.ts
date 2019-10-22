import { Component , ViewChild} from '@angular/core';
// import { IonInfiniteScroll } from '@ionic/angular';
import {
  NavController,
  MenuController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ApiService } from 'src/app/service/api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent{

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  clients = [];
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private api: ApiService,
    private storage: Storage,private route: ActivatedRoute, private router: Router
  ) {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.fetchClients();
  }

  fetchClients(){
    console.log('test');
    const self = this;
    this.api.getClients().subscribe(data => {
      this.api.hideLoader();
      self.api.saveStoreData('clients', data['result'].length);
      self.storage.set('clients', data['result']);
      self.clients = data['result'];
    });
  }
  goto(value){
    let navigationExtras: NavigationExtras = {
      state: {
        projectType: value
      }
    };
    this.router.navigate(['client'], navigationExtras);
  }
  settings() {
    this.navCtrl.navigateForward('settings');
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    this.navCtrl.navigateForward('home-results');
  }

}

import { Component , ViewChild} from '@angular/core';
// import { IonInfiniteScroll } from '@ionic/angular';
import {
  NavController,
  MenuController,
  PopoverController,
  ModalController } from '@ionic/angular';
  import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  projects = [];
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private api: ApiService,
    private route: ActivatedRoute, private router: Router
  ) {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.fetchProjects();
  }

  fetchProjects(){
    console.log('test');
    const self = this;
    this.api.getProjects().subscribe(data => {
      this.api.hideLoader();
      self.api.saveStoreData('projects', data['result'].length);
      self.projects = data['result'];
    });
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  goto(value){
    let navigationExtras: NavigationExtras = {
      state: {
        projectType: value
      }
    };
    
    this.router.navigate(['project'], navigationExtras);
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

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
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss']
})
export class FreelancersComponent {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public searchTerm: string = "";
  searchKey = '';
  searchType = 'name';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  freelancers = [];
  freelancersData = [];
  skills = [];
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private api: ApiService,private route: ActivatedRoute, private router: Router,
    private storage: Storage
  ) {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.fetchFreelancers();
  }

  ngOnInit() {
    this.storage.get('skills').then(data => {
      this.skills = data;
    });
    this.setFilteredItems();
  }

  fetchFreelancers(){
    console.log('test');
    const self = this;
    this.api.getFreelancers().subscribe(data => {
      this.api.hideLoader();
      self.api.saveStoreData('freelancers', data['result'].length);
      self.storage.set('freelancers', data['result']);
      data['result'].forEach(element => {
        element.skill = self.sendSkills(element.skill); 
      });
      self.freelancersData = data['result'];
      this.freelancers = data['result'];
    });
  }

  sendSkills(data){
    let skill = JSON.parse(data);
    let found = '';
    this.skills.forEach(element => {
      for(var i =0; i <= skill.length; i++){
        if(element.id == skill[i]){
          found += element.name + ', ';
        }
      }
    });
    return found;
  }

  setFilteredItems() {
   const self = this;
   if(this.searchType == 'name'){
    self.freelancers = this.freelancersData.filter(item => {
      return item.name.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > -1;
    });
   } else {

    console.log();
    self.freelancers = this.freelancersData.filter(item => {
      return item.skill.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > -1;
    });
   }
   
  }

  goto(value){
    let navigationExtras: NavigationExtras = {
      state: {
        projectType: value
      }
    };
    this.router.navigate(['freelancer'], navigationExtras);
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

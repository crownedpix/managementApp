import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {
  freelancerData = {
    name:"",
    designation:"",
    location:"",
    refrenced_by:"",
    project_id:[{
      id:"",
      name:""
    }],
    contact_email:"",
    contact_phone:"",
    skill:"",
    BHIM_number:"",
    bank_account_no:"",
    bank_ifsc:"",
    bank_linked_phone:"",
    bank_name:""
  };
  skills = [];
  countries = [];
  projects = [];
  users = [];
  constructor(public modalController: ModalController, public navCtrl: NavController, private route: ActivatedRoute, private router: Router, private api: ApiService, private storage: Storage) {
    const self = this;
    self.route.queryParams.subscribe(params => {
      if (self.router.getCurrentNavigation().extras.state) {
        self.api.getFreelancer(self.router.getCurrentNavigation().extras.state.projectType).subscribe(data => {
          this.api.hideLoader();
          var val = JSON.parse(data[0].location)[0];
          if(val != null){
            data[0].location = val + ', ' + self.sendCountry(JSON.parse(data[0].location)[1]);
          } else {
            data[0].location = 'Not Found'
          }
          if(data[0].refrenced_by)
          data[0].refrenced_by = self.sendUser(data[0].refrenced_by);
          if(data[0].skill)
          data[0].skill = self.sendSkills(data[0].skill);
          
          if(data[0].project_id != null)
          data[0].project_id = self.sendProject(data[0].project_id);
          else 
          data[0].project_id = "Not Assigned"

          self.freelancerData = data[0];
        });
      };
    });
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: FreelancersListComponent
  //   });
  //   return await modal.present();
  // }
  ngOnInit() {
    this.storage.get('countries').then(data => {
      this.countries = data;
    });
    this.storage.get('users').then(data => {
      this.users = data;
    });
    this.storage.get('skills').then(data => {
      this.skills = data;
    });
    this.storage.get('projects').then(data => {
      this.projects = data;
    });
  }

  sendCountry(data) {
    var i = 0;
    while(data != this.countries[i].country_code){
      i++;
    }
    return this.countries[i].country_name;
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

  sendUser(data){
    let found = '';
    if (this.users !== undefined && this.users.length > 0) {
      this.users.forEach(item => {
            if(item.id == data) {
                found = item.first_name +' '+ item.last_name;
            }
        });
    }
    return found;
  }

  goto(val, page){
    this.api.goto(val, page);
  }

  sendProject(data){
    let found = {};
      this.projects.forEach(item => {
            if(item.id == data) {
                found = item;
            }
        });
    return found;
  }

  delete(id){
    this.api.deleteFreelancer(id).subscribe(data => {
      console.log(data);
      this.navCtrl.navigateRoot('/freelancers');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectData = {
    name:"",
    description:"",
    client_id:"",
    refrenced_by:"",
    skills:"",
    total_freelancer:[{
      name:"",
      id:""
    }]
  };
  extradata;
  users = [];
  clients = [];
  skills = [];
  freelancers = [];
  constructor(private route: ActivatedRoute, public navCtrl: NavController, private router: Router, private api: ApiService, private storage: Storage) { 
    const self = this;
    self.route.queryParams.subscribe(params => {
      if (self.router.getCurrentNavigation().extras.state) {
        self.api.getProject(self.router.getCurrentNavigation().extras.state.projectType).subscribe(data => {
          this.api.hideLoader();
          this.extradata = JSON.stringify(data[0]);
          this.extradata = JSON.parse(this.extradata);
          if(data[0].refrenced_by)
          data[0].refrenced_by = self.sendUser(data[0].refrenced_by);

          if(data[0].client_id)
          data[0].client_id = self.sendClient(data[0].client_id);

          if(data[0].skills)
          data[0].skills = self.sendSkills(data[0].skills);

          if(data[0].total_freelancer)
          data[0].total_freelancer = self.sendFreelancers(data[0].total_freelancer);
          self.projectData = data[0];
        });
      };
    });
  }

  goto(val, page){
    // console.log(val, page)
    this.api.goto(val, page);
  }

  ngOnInit() {
    this.storage.get('users').then(data => {
      this.users = data;
    });
    this.storage.get('clients').then(data => {
      this.clients = data;
    });
    this.storage.get('skills').then(data => {
      this.skills = data;
    });
    this.storage.get('freelancers').then(data => {
      this.freelancers = data;
    });
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
  sendClient(data){
    let found = '';
    if (this.clients !== undefined && this.clients.length > 0) {
      this.clients.forEach(item => {
            if(item.id == data) {
                found = item.name;
            }
        });
    }
    return found;
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

  sendFreelancers(data){
    let freelancer = JSON.parse(data);
    let found = [];
    this.freelancers.forEach(element => {
      for(var i =0; i <= freelancer.length; i++){
        if(element.id == freelancer[i]){
          found.push(element);
        }
      }
    });
    return found;
  }

  delete(id){
    this.api.deleteProject(id).subscribe(data => {
      console.log(data);
      this.navCtrl.navigateRoot('/projects');
    });
  }

}

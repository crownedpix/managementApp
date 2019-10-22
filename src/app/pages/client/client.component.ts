import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientData = {
    name: "",
    location: "",
    projects: [{
      name: "",
      id: ""
    }],
    contact_email: "",
    contact_phone: ""

  };
  countries = [];
  skills = [];
  projects = [];

  constructor(private alertCtrl: AlertController, private route: ActivatedRoute, public navCtrl: NavController, private router: Router, private api: ApiService, private storage: Storage, private DomSanitizer: DomSanitizer) {
    const self = this;
    self.route.queryParams.subscribe(params => {
      if (self.router.getCurrentNavigation().extras.state) {
        self.api.getClient(self.router.getCurrentNavigation().extras.state.projectType).subscribe(data => {
          this.api.hideLoader();
          var val = JSON.parse(data[0].location)[0];
          if (val != null) {
            data[0].location = val + ', ' + self.sendCountry(JSON.parse(data[0].location)[1]);
          } else {
            data[0].location = "not given";
          }
          if (data[0].projects != null)
            data[0].projects = self.sendProjects(data[0].projects);
          else
            data[0].projects = [{ name: "Null" }]
          self.clientData = data[0];
        });
      };
    });
  }

  ngOnInit() {
    this.storage.get('countries').then(data => {
      this.countries = data;
    });
    this.storage.get('skills').then(data => {
      this.skills = data;
    });
    this.storage.get('projects').then(data => {
      this.projects = data;
    });
  }

  changeValue() {
    console.log("ready");
  }

  sendCountry(data) {
    var i = 0;
    while (data != this.countries[i].country_code) {
      i++;
    }
    return this.countries[i].country_name;
  }

  goto(val, page) {
    this.api.goto(val, page);
  }
  sendSkills(data) {
    let skill = JSON.parse(data);
    let found = '';
    this.skills.forEach(element => {
      for (var i = 0; i <= skill.length; i++) {
        if (element.id == skill[i]) {
          found += element.name + ', ';
        }
      }
    });
    return found;
  }
  sendProjects(data) {
    let project = JSON.parse(data);
    let found = [];
    this.projects.forEach(element => {
      for (var i = 0; i <= project.length; i++) {
        if (element.id == project[i]) {
          found.push(element);
        }
      }
    });
    return found;
  }

  async delete(id) {
    const alert = await this.alertCtrl.create({
      header: 'Client Delete',
      message: 'Are you sure you want to delete this Client? This cannot be undone!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'icon-color',
          handler: () => {

          }
        },
        {
          text: 'Ok',
          cssClass: 'icon-color',
          handler: data => {
            this.api.deleteClient(id).subscribe(data => {
              console.log(data);
              this.navCtrl.navigateRoot('/clients');
            });
          }
        }
      ]
    });
    await alert.present();
  }

}


}

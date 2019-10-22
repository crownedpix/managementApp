
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  public skillForm: FormGroup;
  users = [];
  skills = [];
  countries = [];
  toast;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, public navCtrl: NavController,
    public toastCtrl: ToastController, public storage: Storage) { }

  ngOnInit() {

    this.storage.get('users').then(data => {
      this.users = data;
    })

    this.storage.get('skills').then(data => {
      this.skills = data;
    })
   
    this.storage.get('countries').then(data => {
      this.countries = data;
    })
    
  
    this.skillForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  createSkill() {
    const value = {
      name: this.skillForm.value.name
    }

    this.apiService.setSkills(value).subscribe(data => {
      this.apiService.hideLoader();
      console.log("success");
      this.toast = this.toastCtrl.create({
        message: 'Added Skill Successfully',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
      this.apiService.getSkills().subscribe(data => {
        this.storage.set('skills', data['result']);
      });
      this.navCtrl.navigateRoot('/home-results');
    });
  }

}


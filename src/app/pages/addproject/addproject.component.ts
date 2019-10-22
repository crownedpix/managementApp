import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  public addprojectForm: FormGroup;
  users = [];
  skills = [];
  clients= [];
  freelancers = [];
  toast;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService,public navCtrl: NavController,
    public toastCtrl: ToastController, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('users').then(data => {
      this.users = data;
    })

    this.storage.get('skills').then(data => {
      this.skills = data;
    })
   
    this.storage.get('clients').then(data => {
      this.clients = data;
    })

    this.storage.get('freelancers').then(data => {
      this.freelancers = data;
    })


    
    this.addprojectForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'description': [null],
      'skills': [null, Validators.compose([
        Validators.required
      ])],
      'refrenced_by':[null, Validators.compose([
        Validators.required
      ])],
      'client_id':[null, Validators.compose([
        Validators.required
      ])],
      'total_freelancer':[null, Validators.compose([
        Validators.required
      ])]
    });
  }

  addProject() {
    const value = {
      name: this.addprojectForm.value.name,
      description: this.addprojectForm.value.description,
      skills: JSON.stringify(this.addprojectForm.value.skills),
      refrenced_by: Number(this.addprojectForm.value.refrenced_by),
      client_id: Number(this.addprojectForm.value.client_id),
      total_freelancer: JSON.stringify(this.addprojectForm.value.total_freelancer)
    }
    console.log(value);
    this.apiService.setProject(value).subscribe(data => {
      console.log("success");
      this.toast = this.toastCtrl.create({
        message: 'Added Project Successfully',
        duration: 2000
      }).then((toastData)=>{
        console.log(toastData);
        toastData.present();
      });
      this.apiService.hideLoader();
      this.navCtrl.navigateRoot('/projects');
    });
  }

}

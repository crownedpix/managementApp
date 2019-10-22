import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  public addclientForm: FormGroup;
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
    
  
    this.addclientForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'contact_email': [null, Validators.compose([
        Validators.required
      ])],
      'contact_phone': [null, Validators.compose([
        Validators.required
      ])],
      'state': [null],
      'country': [null],
      'refrenced_by': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  createClient() {
    const value = {
      name: this.addclientForm.value.name,
      contact_email: this.addclientForm.value.contact_email,
      contact_phone: this.addclientForm.value.contact_phone,
      location: JSON.stringify([this.addclientForm.value.state, this.addclientForm.value.country]),
      refrenced_by: Number(this.addclientForm.value.refrenced_by),
      rating: 0
    }

    this.apiService.setClient(value).subscribe(data => {
      console.log("success");
      this.toast = this.toastCtrl.create({
        message: 'Added Client Successfully',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
      this.apiService.hideLoader();
      this.navCtrl.navigateRoot('/clients');
    });
  }

}

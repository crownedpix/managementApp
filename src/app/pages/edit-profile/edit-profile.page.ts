import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  userdata = {};
  toast;
  public userForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public api: ApiService,
    public storage: Storage,
    private formBuilder: FormBuilder
  ) { 
   this.storage.get('c_user').then(data => {
    this.userdata = JSON.parse(data);
    this.userForm.controls['first_name'].setValue(this.userdata["first_name"]);
    this.userForm.controls['last_name'].setValue(this.userdata["last_name"]);
    this.userForm.controls['email'].setValue(this.userdata["email"]);
   });
  }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      'first_name': [null, Validators.compose([
        Validators.required
      ])],
      'last_name': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])]
    });

    
  }

  editUser() {
    const value = {
      first_name: this.userForm.value.first_name,
      last_name: this.userForm.value.last_name,
    }

    this.api.updateuser(value, this.userdata['id']).subscribe(data => {
      this.api.saveKeyData('first_name',this.userForm.value.first_name, 'c_user');
      this.api.saveKeyData('last_name',this.userForm.value.last_name, 'c_user');
      console.log("success");
      this.toast = this.toastCtrl.create({
        message: 'Updated User Successfully',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
      this.api.hideLoader();
      this.navCtrl.navigateForward('/home-results');
    });
    
  }

}

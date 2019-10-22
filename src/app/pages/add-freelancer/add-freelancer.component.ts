import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.scss']
})
export class AddFreelancerComponent {
  public addfreelancerForm: FormGroup;
  users = [];
  skills = [];
  countries = [];
  statuses = [];
  toast;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, public navCtrl: NavController,
    public toastCtrl: ToastController, public storage: Storage) {
      // this.addfreelancerForm.controls["status"].setValue("active");
      this.statuses = this.apiService.statuses;
     }

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
    
  
    this.addfreelancerForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'contact_email': [null, Validators.compose([
        Validators.required
      ])],
      'contact_phone': [null, Validators.compose([
        Validators.required
      ])],
      'designation': [null, Validators.compose([
        Validators.required
      ])],
      'experience': [null, Validators.compose([
        Validators.required
      ])],
      'state': [null],
      'country': [null],
      'status': [null, Validators.compose([
        Validators.required
      ])],
      'skill': [null, Validators.compose([
        Validators.required
      ])],
      'bank_name': [null],
      'bank_account_no': [null],
      'bank_ifsc': [null],
      'bank_linked_phone': [null],
      'BHIM_number': [null],
      'refrenced_by': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  createFreelancer() {
    const value = {
      name: this.addfreelancerForm.value.name,
      contact_email: this.addfreelancerForm.value.contact_email,
      contact_phone: this.addfreelancerForm.value.contact_phone,
      designation: this.addfreelancerForm.value.designation,
      experience: this.addfreelancerForm.value.experience,
      status: this.addfreelancerForm.value.status,
      skill: JSON.stringify(this.addfreelancerForm.value.skill),
      location: JSON.stringify([this.addfreelancerForm.value.state, this.addfreelancerForm.value.country]),
      bank_name: (this.addfreelancerForm.value.bank_name),
      bank_account_no: (this.addfreelancerForm.value.bank_account_no),
      bank_ifsc:(this.addfreelancerForm.value.bank_ifsc),
      bank_linked_phone: (this.addfreelancerForm.value.bank_linked_phone),
      BHIM_number:(this.addfreelancerForm.value.BHIM_number),
      refrenced_by: Number(this.addfreelancerForm.value.refrenced_by),
      rating: 0
    }
    console.log(value);
    this.apiService.setFreelancer(value).subscribe(data => {
      console.log("success");
      this.toast = this.toastCtrl.create({
        message: 'Added Freelancer Successfully',
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
      this.apiService.hideLoader();
      this.navCtrl.navigateRoot('/freelancers');
    });
  }

}

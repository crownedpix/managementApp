import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loaderToShow: any;
  headers = new Headers({
    'Content-Type': 'application/json',
    'withCredentials': 'true'
  });

  // apiURL = "http://localhost:3000/";
  apiURL = "https://peaceful-sands-57519.herokuapp.com/";

  constructor(private http: HttpClient, private store: Storage,
    private route: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController) {
    // this.buildHeaders();
  }
 
  statuses = [
    {
      name:'Active',
      value: 'active'
    },
    {
      name:'Available',
      value: 'available'
    },
    {
      name:'Not interested',
      value: 'notIntrested'
    },
    {
      name:'Hold',
      value: 'hold'
    },
    {
      name:'Blocked',
      value: 'blocked'
    },
    {
      name:'Contact Later',
      value:'contactLater'
    }
  ]

  login(data) {
    const Authdata = {
      email: data.email,
      password: data.password
    }

    return this.http.post(this.apiURL + 'api/login', Authdata);
  }

  setFreelancer(data) {
    this.showLoader('set freelancer');
    return this.http.post(this.apiURL + 'api/addfreelancer', data);
  }

  getFreelancers() {
    this.showLoader('Freelancers');
    return this.http.get(this.apiURL + 'api/getfreelancers');
  }
  deleteFreelancer(id){
    return this.http.get(this.apiURL + 'api/deletefreelancer/'+ id);
  }
  getFreelancer(id) {
    this.showLoader('get freelancer');
    return this.http.get(this.apiURL + 'api/getfreelancer/' + id);
  }

  setProject(data) {
    this.showLoader('set project');
    return this.http.post(this.apiURL + 'api/addproject', data);
  }

  getProjects() {
    this.showLoader('Projects');
    return this.http.get(this.apiURL + 'api/getprojects');
  }

  getProject(id) {
    this.showLoader('get project');
    return this.http.get(this.apiURL + 'api/getproject/' + id);
  }

  deleteProject(id){
    return this.http.get(this.apiURL + 'api/deleteproject/'+id);
  }

  setClient(data) {
    this.showLoader('set clients');
    return this.http.post(this.apiURL + 'api/addclient', data);
  }

  getClients() {
    this.showLoader('Clients');
    return this.http.get(this.apiURL + 'api/getclients');
  }
  getClient(id) {
    this.showLoader('get client');
    return this.http.get(this.apiURL + 'api/getclient/' + id);
  }
  deleteClient(id){
    return this.http.get(this.apiURL + 'api/deleteclient/'+ id);
  }

  getUsers() {

    return this.http.get(this.apiURL + 'api/getusers');
  }
  updateuser(data, id) {
    return this.http.post(this.apiURL + 'api/updateuser/' + id, data);
  }

  getSkills() {

    return this.http.get(this.apiURL + 'api/getskills');
  }

  setSkills(data) {
    this.showLoader('set skills');
    return this.http.post(this.apiURL + 'api/setskills', data);
  }
  getCountries() {

    return this.http.get(this.apiURL + 'api/getcountries');
  }


  saveStoreData(val, data) {
    this.store.get('totalRecords').then(valueStr => {
      let value = valueStr;
      // Modify just that property
      value[val] = data;
      // Save the entire data again
      this.store.set('totalRecords', value);
      console.log(valueStr)
    });
  }

  saveKeyData(val, data, key) {
    this.store.get(key).then(valueStr => {
      let value = JSON.parse(valueStr);
      // Modify just that property
      value[val] = data;
      // Save the entire data again
      this.store.set(key, JSON.stringify(value));
    });
  }

  goto(value, page) {
    let navigationExtras: NavigationExtras = {
      state: {
        projectType: value
      }
    };
    this.router.navigate([page], navigationExtras);
  }

  showLoader(from) {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading ' + from
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!' + from);
      });
    });
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 1000);
  }




}

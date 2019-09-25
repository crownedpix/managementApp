import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private api: ApiService) {
    this.plt.ready().then(() => {
      this.checkToken();
    })
  }

  login(data) {
    this.api.login(data).subscribe((req) => {
      if (req['code'] == 204) {
        
      } else {
        return this.storage.set('TOKEN_KEY', req['token']).then(res => {
          this.authenticationState.next(true);
        });
      }
    });

  }
  logout() {
    console.log("sdsd");
    return this.storage.remove('TOKEN_KEY').then(res => {
      this.authenticationState.next(false);
    });
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
  checkToken() {
    return this.storage.get('TOKEN_KEY').then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}

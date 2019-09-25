import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

   login(data) {
    const Authdata = {
      email: data.email,
      password: data.password
    }
    return this.http.post(this.apiURL + 'api/login', Authdata);
  }

}

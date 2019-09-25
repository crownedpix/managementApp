import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import {} from '@angular/router';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}

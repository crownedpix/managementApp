import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/dashboard']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  stars = [1,2,3,4,5];
  hasHalf = false;
  constructor() { 
  }

  @Input() name: Int16Array;

  ngOnInit(){
   const breakval = this.name.toString().split('.')[1];
   const splitAt = this.name.toString().split('.')[0];
   if(Number(breakval) >= 0){
    this.hasHalf = true;
   }

  }

}

import { Component, OnInit } from '@angular/core';

import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, ) { }

  currentMenuItem: string = "";

  currentUser = {};
  location: string = "";

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.location = JSON.parse(localStorage.getItem('location'));
    this.currentMenuItem = this.location;
    console.log("Menu current user");
    console.log(this.currentUser);
  }

  menuItem(menuItem: string) {

    this.currentMenuItem = menuItem;

    switch (menuItem) {
      case 'feed': {
        this.router.navigate(['./feed']);
        localStorage.setItem('location', JSON.stringify('feed'));
      } break;
      case 'progress': {
        this.router.navigate(['./progress/competency-tracker']);
        localStorage.setItem('location', JSON.stringify('progress'));
      } break;
      case 'events': {
        this.router.navigate(['./events']);
        localStorage.setItem('location', JSON.stringify('events'));
      } break;
      case 'assessment': {
        this.router.navigate(['./assessment']);
        localStorage.setItem('location', JSON.stringify('assessment'));
      } break;
      case 'team': {
        this.router.navigate(['./team']);
        localStorage.setItem('location', JSON.stringify('team'));
      } break;
      case 'library': {
        this.router.navigate(['./library']);
        localStorage.setItem('location', JSON.stringify('library'));
      } break;
      default: {

      }
    }
  }

}

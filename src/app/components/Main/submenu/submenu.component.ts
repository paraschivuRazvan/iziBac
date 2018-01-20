import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  constructor() { }

  currentUser = {};

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("SubMenu current user");
    console.log(this.currentUser);

  }

}

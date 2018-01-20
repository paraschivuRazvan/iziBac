import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []
})
export class MainComponent implements OnInit {

  constructor(public db: AngularFireDatabase) { }

  currentUser = "general";

  studentMenuItems = [{

  }]

  setUser(user: string): void {

    this.currentUser = user;

    switch (user) {
      case 'student': {

      }
        break;

      case 'prof': {

      }
        break;

      case 'parinte': {

      }
        break;

      default: {

      }
        break;
    }

    console.log(this.currentUser)
  }

  ngOnInit() {

    console.log(this.db);

    let ref = this.db.list('LandingPage/News');

    console.log(ref)

    ref.valueChanges()
      .subscribe(items => {
        console.log(items)
      });

  }

  ngAfterViewInit() {

    $('#recipeCarousel').carousel({
      interval: 10000
    })

    $('.carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });


  }

}

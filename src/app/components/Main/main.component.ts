import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { enableProdMode } from '@angular/core';

enableProdMode();

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

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  showMenu = [];

  generalMenuItems = [
    {

      text: "De ce iziBac",
      id: "#general_1"
    },

    {

      text: "Păreri",
      id: "#general_2"
    },

    {

      text: "Implică-te",
      id: "#general_3"
    },

    {

      text: "Consiliere",
      id: "#general_4"
    },

    {
      text: "Contact",
      id: "#general_5"
    },
  ];

  profMenuItems = [
    {

      text: "De ce iziBac",
      id: "#general_1"
    },

    {

      text: "Păreri",
      id: "#general_2"
    },

    {

      text: "Implică-te",
      id: "#general_3"
    },

    {
      text: "Contact",
      id: "#general_5"
    },


  ];

  // countDownDate = new Date("Apr 20, 2018 23:59:00").getTime();
  countDownDate = new Date().getTime() + (3 * 60 * 60 * 1000);

  setUser(user: string): void {

    this.currentUser = user;

    switch (user) {
      case 'prof': {
        this.showMenu = this.profMenuItems;
      }
        break;
      default: {
        this.showMenu = this.generalMenuItems;
      }
        break;
    }

  }

  ngOnInit() {

    this.showMenu = this.generalMenuItems;

    setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }.bind(this), 1000);

    console.log(this.db);

    // let ref = this.db.list('LandingPage/News');

    // console.log(ref)

    // ref.valueChanges()
    //   .subscribe(items => {
    //     console.log(items)
    //   });

  }

  ngAfterViewInit() {

    $(".slider").not('.slick-initialized').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
}

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

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  countDownDate = new Date("Apr 20, 2018 20:00:00").getTime();

  menuToShow = [];

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


  studentMenuItems = [
    {

      text: "De ce iziBac",
      id: "general_1"
    },
    {

      text: "Functionalitati",
      id: "general_2"
    },
    {

      text: "Pareri",
      id: "general_3"
    },
    {

      text: "Media",
      id: "general_4"
    },
    {

      text: "Implica-te",
      id: "general_5"
    },
    {

      text: "Parteneri",
      id: "general_6"
    },
    {

      text: "Consiliere",
      id: "general_6"
    },
    {
      text: "Contact",
      id: "general_7"
    },
  ];


  profMenuItems = [
    {

      text: "De ce iziBac",
      id: "general_1"
    },
    {

      text: "Functionalitati",
      id: "general_2"
    },
    {

      text: "Pareri",
      id: "general_3"
    },
    {

      text: "Media",
      id: "general_4"
    },
    {

      text: "Implica-te",
      id: "general_5"
    },
    {

      text: "Parteneri",
      id: "general_6"
    },
    {

      text: "Consiliere",
      id: "general_6"
    },
    {
      text: "Contact",
      id: "general_7"
    },
  ];


  parentMenuItems = [
    {

      text: "De ce iziBac",
      id: "general_1"
    },
    {

      text: "Functionalitati",
      id: "general_2"
    },
    {

      text: "Pareri",
      id: "general_3"
    },
    {

      text: "Media",
      id: "general_4"
    },
    {

      text: "Implica-te",
      id: "general_5"
    },
    {

      text: "Parteneri",
      id: "general_6"
    },
    {

      text: "Consiliere",
      id: "general_6"
    },
    {
      text: "Contact",
      id: "general_7"
    },
  ];

  setUser(user: string): void {

    this.currentUser = user;

    switch (user) {
      case 'student': {
        this.menuToShow = this.studentMenuItems;
      }
        break;

      case 'prof': {
        this.menuToShow = this.profMenuItems;
      }
        break;

      case 'parinte': {
        this.menuToShow = this.parentMenuItems;
      }
        break;

      default: {
        this.menuToShow = this.generalMenuItems;
      }
        break;
    }

    this.ngAfterViewInit();
  }

  ngOnInit() {

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

    let ref = this.db.list('LandingPage/News');

    console.log(ref)

    ref.valueChanges()
      .subscribe(items => {
        console.log(items)
      });

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

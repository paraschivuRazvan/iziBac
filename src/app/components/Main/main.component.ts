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

    // $('#recipeCarousel').carousel({
    //   interval: 10000
    // })

    // $('.carousel .carousel-item').each(function () {
    //   var next = $(this).next();
    //   if (!next.length) {
    //     next = $(this).siblings(':first');
    //   }
    //   next.children(':first-child').clone().appendTo($(this));

    //   if (next.next().length > 0) {
    //     next.next().children(':first-child').clone().appendTo($(this));
    //   }
    //   else {
    //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    //   }
    // });


  }

}

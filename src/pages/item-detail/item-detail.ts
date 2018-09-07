import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  CardItems: any[];

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {

    this.item = navParams.get('item') || items.defaultItem;
    this.item = [
      {
        user: {
        name: "Official Visits",
        profilePic: "assets/img/speakers/9.jpg",
        about: "All your official requirments.",
        avatar: 'assets/img/marty-avatar.png'
        },
        date: 'November 5, 2018',
        image: 'assets/img/speakers/9.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'assets/img/speakers/10.jpg',
          name: 'Family Visits',
          about: 'Hashan malawana'
        },
        date: 'May 12, 2017',
        image: 'assets/img/speakers/10.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/speakers/3.jpg',
          name: 'Visit For Hiking',
          about: 'Hashan malawana'
        },
        date: 'June 28, 2018',
        image: 'assets/img/speakers/3.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }

    ];
  }

}

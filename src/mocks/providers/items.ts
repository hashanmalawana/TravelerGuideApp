import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
     "name": "Official Visits",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "All your official requirments.",
        "details": "Where your business models talk for you"
  };


  constructor() {
    let items = [
      {
        "name": "Official Visits",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "All your official requirments.",
        "details": "Where your business models talk for you"
      },
      {
        "name": "Family Visits",
        "profilePic": "assets/img/speakers/10.jpg",
        "about": "Get enjoy with your family.",
        "details": "Where your family find the happiness"
      },
      {
        "name": "Visit For Hiking",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "Hiking never ends.",
        "details": "Where your soul experience the challenge "
      },
      {
        "name": "Visit For Surfing",
        "profilePic": "assets/img/speakers/8.jpg",
        "about": "Surf your experience.",
        "details": "Where your desires surf the life"
      },
      {
        "name": "Visit For Nature",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "Nature is to feel .",
        "details": "Where your happiness meets the nature"
      },
      {
        "name": "Visit For Culture",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "The herritage of Country.",
        "details": "Where your time get herritaged"
      },
      {
        "name": "Beach Lovers",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Grab your own spirit.",
        "details": "Where your loving one's get closed"
      },
      {
        "name": "Educational Visits",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Leran all you need.",
        "details": "Where your learnings come to the peak"
      },

      {
        "name": "For Honeymoon",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "Make awesome days.",
        "details": "Where your life partner get closed"
      },
      {
        "name": "Different Able Visitors",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "We are not limited.",
        "details": "Where your desires come true without limits"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
     "name": "Official Visits",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "All your official requirments."
  };


  constructor() {
    let items = [
      {
        "name": "Official Visits",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "All your official requirments."
      },
      {
        "name": "Family Visits",
        "profilePic": "assets/img/speakers/10.jpg",
        "about": "Get enjoy with your family."
      },
      {
        "name": "Visit For Hiking",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "Hiking never ends."
      },
      {
        "name": "Visit For Surfing",
        "profilePic": "assets/img/speakers/8.jpg",
        "about": "Surf your experience."
      },
      {
        "name": "Visit For Nature",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "Nature is to feel ."
      },
      {
        "name": "Visit For Culture",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "The herritage of Country."
      },
      {
        "name": "Beach Lovers",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Grab your own spirit."
      },
      {
        "name": "Educational Visits",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Leran all you need."
      },

      {
        "name": "For Honeymoon",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "Make awesome days."
      },
      {
        "name": "Different Able Visitors",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "We are not limited."
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

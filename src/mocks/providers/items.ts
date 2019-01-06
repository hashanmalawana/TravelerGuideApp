import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
     "name": "Official Visits",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "All your official requirments.",
        "details": "Where your business models talk for you",
        "location": "Colombo"
  };


  constructor() {
    let items = [
      {
        "name": "Official Visits",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "All your official requirments.",
        "details": "Where your business models talk for you",
        "location": "Colombo1",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/colombo1.jpg',
            "namep": 'Colombo',
            "postText": 'Coco Space , Java Lounge , Cinnamon Red Colombo , Movenpick Hotel Colombo , Cinnamon Grand Colombo , The Kingsbury Hotel , The Steuart by Citrus ',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/kandy1.jpg',
            "namep": 'Kandy',
            "postText": 'OZO Kandy , Earls Regent hotel , Amaara Sky Hotel , the Queens Hotel , Clove Villa , Hotel Suisse'

          },
          {
            "avatarImageUrl": 'assets/img/speakers/galle1.jpg',
            "namep": 'Galle',
            "postText": 'Le Grand Galle , Mango House , Fort Bazaar , Tamarind Hill , Fort Square Boutique',

          },
        ]

      },
      {
        "name": "Family Visits",
        "profilePic": "assets/img/speakers/10.jpg",
        "about": "Get enjoy with your family.",
        "details": "Where your family find the happiness",
        "location": "Colombo2",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/anuradhapura1.jpg',
            "namep": 'Anuradhapura',
            "postText": 'Rajarata Hotel , Hotel White House , Heritage Hotel , Villu Villa , Senowin Holiday Resort',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/habarana1.jpg',
            "namep": 'Habarana',
            "postText": 'Cinnamon Lodge Habarana , Sungreen Resort , Sorowwa Resort , Danawwa Resort , The Other Corner Habarana , travelway Village',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/jaffna1.jpg',
            "namep": 'Jaffna',
            "postText": 'The Thinnai , ASR Hotel , Jetwing Jaffna , Thisha Hotel , Jaffna Heritage , North Gate By Jetwing',

          },
        ]

      },
      {
        "name": "Visit For Hiking",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "Hiking never ends.",
        "details": "Where your soul experience the challenge ",
        "location": "Colombo3",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/belihuloya1.jpg',
            "namep": 'Belihul Oya',
            "postText": 'The Glenrock , Mount Field Resort , Belpeak Cottage , River Garden Resort , Landa Holiday , Belihul Oya Rest House',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/ella1.jpg',
            "namep": 'Ella',
            "postText": 'Ella Edge Resort , Rock Side Inna Ella , Ravana Heights , The View , Zion View , Country Homes , Hotel Onrock',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/haputhale1.jpg',
            "namep": 'Haputhale',
            "postText": 'Thotalagala , Akway Resort , Hotel La Vista Sur , Amaya View Guest Inn , Olive Hill Top Hotel , The Mist Holiday Bungalow',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/ella1.jpg',
            "namep": 'Ella',
            "postText": 'Ella Edge Resort , Rock Side Inna Ella , Ravana Heights , The View , Zion View , Country Homes , Hotel Onrock',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/haputhale1.jpg',
            "namep": 'Haputhale',
            "postText": 'Thotalagala , Akway Resort , Hotel La Vista Sur , Amaya View Guest Inn , Olive Hill Top Hotel , The Mist Holiday Bungalow',

          },
        ]

      },
      {
        "name": "Visit For Surfing",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Surf your experience.",
        "details": "Where your desires surf the life",
        "location": "Colombo4",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/mirissa1.jpg',
            "namep": 'Mirissa',
            "postText": 'Mandara Resort Mirissa , Morning Star , Latheena Resort , Tithira Guest House , Surf & Yoga Mirissa',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/arugambey1.jpg',
            "namep": 'Arugan Bay',
            "postText": 'Bay Vista Hotel Arugam Bay , Dream Garden Resort , The Blue Wave Hotel , Galaxy Lounge Hotel , Arnes Place , Sandy Beach Hotel',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/arugambey2.jpg',
            "namep": 'Ahangama',
            "postText": 'Villa Modarawaththa , Mosvold Villa , Gartons Cape , W15 Escape , Crystal Oceanic , The Sandhya On Kabalama Beach',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/mirissa2.jpg',
            "namep": 'Mirissa',
            "postText": 'Mandara Resort Mirissa , Morning Star , Latheena Resort , Tithira Guest House , Surf & Yoga Mirissa',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/arugambey2.jpg',
            "namep": 'Arugan Bay',
            "postText": 'Bay Vista Hotel Arugam Bay , Dream Garden Resort , The Blue Wave Hotel , Galaxy Lounge Hotel , Arnes Place , Sandy Beach Hotel',

          },
        ]

      },
      {
        "name": "Visit For Nature",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "Nature is to feel .",
        "details": "Where your happiness meets the nature",
        "location": "Colombo5",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/yala1.jpg',
            "namep": 'Yala',
            "postText": 'Arana Yala , jetwing Yala , Hotel Elephant Reach , Flamingo Nature Resort , Kele Yala Sri Lanka , Leopard Spotting Camp',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/wilpaththuwa.jpg',
            "namep": 'Wilpaththuwa',
            "postText": 'Tree House Wilpaththuwa , Thamaravila , Leopard Den Hotel , Dolosmahe Guest House , Wilpaththuwa House , Wilpaththuwa Wild Watch',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/habarana1.jpg',
            "namep": 'Habarana',
            "postText": 'Galkadawala Forest Lodge , Cinnamon Lodge Habarana , Mutu Village , Elephant Watch Hut , Amba Sewana Resort , Athreya Ayurveda Ashram',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/ella1.jpg',
            "namep": 'Ella',
            "postText": 'Ella Edge Resort , Rock Side Inna Ella , Ravana Heights , The View , Zion View , Country Homes , Hotel Onrock',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/haputhale1.jpg',
            "namep": 'Haputhale',
            "postText": 'Thotalagala , Akway Resort , Hotel La Vista Sur , Amaya View Guest Inn , Olive Hill Top Hotel , The Mist Holiday Bungalow',

          },
        ]

      },
      {
        "name": "Visit For Culture",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "The herritage of Country.",
        "details": "Where your time get herritaged",
        "location": "Colombo6",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/anuradhapura1.jpg',
            "namep": 'Anuradhapura',
            "postText": 'Heritage Hotel Anuradhapura , Hotel Alakamandawa , Rajarata Hotel , Hotel Heladiva , Lake side at Nuwara Wewa , Ayasta Resort and Spa',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/polonnaruwa1.jpg',
            "namep": 'Polonnaruwa',
            "postText": 'Hotel Ancient Village , Thisara Guest House , Deer Park Hotel , Hotel Sudu Araliya , Ekho Lake House , hotel Mahanuge',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/sigiriya1.jpg',
            "namep": 'Sigiriya',
            "postText": 'Aliya Resort and Spa , Elephant Corridor Hotel , Hotel Sigiriya , Kuwera Eco Logde , Flower Garden Eco Village , Sigiriya Village Hotel',

          },

          {
            "avatarImageUrl": 'assets/img/speakers/habarana1.jpg',
            "namep": 'Habarana',
            "postText": 'Cinnamon Lodge Habarana , Sungreen Resort , Sorowwa Resort , Danawwa Resort , The Other Corner Habarana , travelway Village',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/jaffna1.jpg',
            "namep": 'Jaffna',
            "postText": 'The Thinnai , ASR Hotel , Jetwing Jaffna , Thisha Hotel , Jaffna Heritage , North Gate By Jetwing',

          },
        ]

      },
      {
        "name": "Beach Lovers",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Grab your own spirit.",
        "details": "Where your loving one's get closed",
        "location": "Colombo7",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/mirissa1.jpg',
            "namep": 'Mirissa',
            "postText": 'Mandara Resort Mirissa , Morning Star , Latheena Resort , Tithira Guest House , Surf & Yoga Mirissa',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/arugambey2.jpg',
            "namep": 'Arugan Bay',
            "postText": 'Bay Vista Hotel Arugam Bay , Dream Garden Resort , The Blue Wave Hotel , Galaxy Lounge Hotel , Arnes Place , Sandy Beach Hotel',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/ahangama1.jpg',
            "namep": 'Ahangama',
            "postText": 'Villa Modarawaththa , Mosvold Villa , Gartons Cape , W15 Escape , Crystal Oceanic , The Sandhya On Kabalama Beach',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/mirissa2.jpg',
            "namep": 'Negambo',
            "postText": 'Bay Vista Hotel Arugam Bay , Dream Garden Resort , The Blue Wave Hotel , Galaxy Lounge Hotel , Arnes Place , Sandy Beach Hotel',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/arugambey1.jpg',
            "namep": 'Arugan Bay',
            "postText": 'Bay Vista Hotel Arugam Bay , Dream Garden Resort , The Blue Wave Hotel , Galaxy Lounge Hotel , Arnes Place , Sandy Beach Hotel',

          },
        ]

      },
      {
        "name": "Educational Visits",
        "profilePic": "assets/img/speakers/8.jpg",
        "about": "Leran all you need.",
        "details": "Where your learnings come to the peak",
        "location": "Colombo8",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/colombo2.jpg',
            "namep": 'Colombo',
            "postText": 'Colombo Muesiem , Colombo Port , Railway Muesiem Fort , Light House , Grahalokagaaraya , Zoo , Waters Edge , Viharamahadevi , Indepemdence Square ',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/galle2.jpg',
            "namep": 'Galle',
            "postText": 'Galle Fort , Galle Muesiem , Gem Learning Center , ',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/anuradhapura2.jpg',
            "namep": 'Anuradhapura',
            "postText": 'Anuradhapura Cultural Center , Rajarata Information Hut , Ruwanweli Seya , Heritage Information',

          },
        ]

      },

      {
        "name": "For Honeymoon",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "Make awesome days.",
        "details": "Where your life partner get closed",
        "location": "Colombo9",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/habarana1.jpg',
            "namep": 'Haputhale',
            "postText": 'Thotalagala , Akway Resort , Hotel La Vista Sur , Amaya View Guest Inn , Olive Hill Top Hotel , The Mist Holiday Bungalow',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/ella1.jpg',
            "namep": 'Colombo',
            "postText": 'Coco Space , Java Lounge , Cinnamon Red Colombo , Movenpick Hotel Colombo , Cinnamon Grand Colombo , The Kingsbury Hotel , The Steuart by Citrus ',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/habarana.jpg',
            "namep": 'Kandy',
            "postText": 'OZO Kandy , Earls Regent hotel , Amaara Sky Hotel , the Queens Hotel , Clove Villa , Hotel Suisse'

          },
        ]

      },
      {
        "name": "Different Able Visitors",
        "profilePic": "assets/img/speakers/10.jpg",
        "about": "We are not limited.",
        "details": "Where your desires come true without limits",
        "location": "Colombo10",
        "places": [
          {
            "avatarImageUrl": 'assets/img/speakers/colombo2.jpg',
            "namep": 'Colombo',
            "postText": 'Independance Square , Viharamahadevi Park , Cinnamon Red Colombo , Movenpick Hotel Colombo , Cinnamon Grand Colombo , The Kingsbury Hotel , The Steuart by Citrus ',

          },
          {
            "avatarImageUrl": 'assets/img/speakers/kandy2.jpg',
            "namep": 'Kandy',
            "postText": 'Dalada Maligawa , Peradeniya Botenical Garden , Tea Logde , Amaara Sky Hotel , the Queens Hotel , Clove Villa , Hotel Suisse'

          },
          {
            "avatarImageUrl": 'assets/img/speakers/anuradhapura2.jpg',
            "namep": 'Anuradhapura',
            "postText": 'jaya Sri Maha Bodhiya , Ruwanweliseya Stupa, Herriatage Hotel , Nuware Wewa',

          },
        ]

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

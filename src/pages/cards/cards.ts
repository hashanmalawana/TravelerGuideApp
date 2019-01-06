import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  email: string;
  message: string;
  messageDisplay: Observable<any[]>;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.messageDisplay = db.list('chat').valueChanges();
  }

  ionViewDidLoad() {
  }

  //set message data to NOSQL database

  sendMessage(){
    this.storage.get('email')
    .then((val) => {
      this.email = val;
      this.db.list('chat').push({
        email: this.email,
        message: this.message
      });
    });

  }
}

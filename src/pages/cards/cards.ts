import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  email: string;
  message: string;
  messageDisplay: Observable<any[]>;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.navParams.get('email');
    this.messageDisplay = db.list('chat').valueChanges();     //Display Realtime messages
  }

  ionViewDidLoad() {
  }

  //set message data to NOSQL database
  sendMessage(){
    this.db.list('chat').push({
       message: this.message
     });
  }
}

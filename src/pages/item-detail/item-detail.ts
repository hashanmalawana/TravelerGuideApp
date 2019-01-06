import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import { Items } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  currentItems: any;
  card:any;
  public tap: number = 0;

  constructor(public toastCtrl: ToastController ,public navCtrl: NavController, navParams: NavParams, items: Items , public alertCtrl:AlertController) {

    this.item = navParams.get('item');
  }

  tapEvent(card) {
    this.tap++
    const toast = this.toastCtrl.create({
      message: 'You Liked',
      duration: 3000
    });
    toast.present();

  }

  comment(card) {

    const prompt = this.alertCtrl.create({
      title: 'Comment',
      message: "Share your experience",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            const toast = this.toastCtrl.create({
              message: 'You Commented',
              duration: 3000
            });
            toast.present();
          }
        }
      ]
    });
    prompt.present();

  }

}

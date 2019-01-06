import { WelcomePage } from './../welcome/welcome';
import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Settings } from '../../providers';
import { AngularFireDatabase } from 'angularfire2/database';
import { MainPage } from '../index';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

arrData = []
myInput
  // Our local settings object
  options: any;

  settingsReady = false;



  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private fdb: AngularFireDatabase,
    public settings: Settings,
    public navParams: NavParams,
    public translate: TranslateService) {

      this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
        this.arrData = _data;
        console.log(this.arrData);
      });
  }


  showPrompt(){

    const prompt = this.alertCtrl.create({
      title: 'Comments',
      message: "Tell Us Your Experience",
      inputs: [
        {
          name: 'myInput',
          placeholder: 'Type here'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          console.log(data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.btnclick(data.myInput);
          }
        }
      ]
    });
    prompt.present();
  }



  btnclick(item){
    this.fdb.list("/myItems/").push(item);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Traveler Guide',
      subTitle: 'Your Intelligent Travel Guider. Make your own database and serve yourself and make your arround better.',
      buttons: ['OK']
    });
    alert.present();
  }
  goMapPage(){
    this.navCtrl.push(MapPage);
  }


}

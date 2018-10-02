import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,private alertCon: AlertController, private afAuth: AngularFireAuth,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  email: String;
  password: String;

  alert(title, message){
    this.alertCon.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  openRegisterPage(){
    this.afAuth.auth.signInWithEmailAndPassword(String(this.email), String(this.password))
    .then(data=>{
      this.navCtrl.push(MainPage);
    })
    .catch(error=>{
      console.log('Error', error)
    this.alert('ERROR!', 'password or Email is wrong');
    });
  }

  // Attempt to login in through our User service
   /*doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }*/
}

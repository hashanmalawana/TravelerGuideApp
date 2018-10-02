import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type


  email: string;
  password: string;


  // Our translated text strings
  private signupErrorString: string;

  constructor(private alertCon: AlertController,
              private afAuth: AngularFireAuth,
              public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  alert(title, message){
    this.alertCon.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  userRegister(){
    this.afAuth.auth.createUserWithEmailAndPassword(String(this.email), String(this.password))
    .then(data=> {
      this.alert('SUCCESS', 'You have created an account');
    })
    .catch(error=>{
      console.log('Error', error)
      this.alert('ERROR', 'Fill all filds');
    });
  }

  /* doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  } */
}

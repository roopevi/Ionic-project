import { RegisterPage } from './../register/register';
import { FrontPage } from './../front/front';
import { Login } from './../../providers/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //private user: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: Login) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if (localStorage.getItem('user') !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem('user')));

      this.loginService.logged = true;
      this.navCtrl.push(FrontPage);
    }
    else if (this.loginService.getUser().password !== undefined) {
      this.loginService.login();
    }
  }

  logIn = (value: any) => {
    this.loginService.setUser(value);
    this.loginService.login();
    this.navCtrl.push(FrontPage);
  }

  switchToRegister () {
    this.navCtrl.setRoot(RegisterPage);
  }

}

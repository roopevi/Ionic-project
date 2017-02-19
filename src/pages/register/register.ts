import { Register } from './../../providers/register';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FrontPage } from './../front/front';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  private email: string = '';
  private username: string = '';
  private password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: Register) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  switchToMenu = () => {
    this.navCtrl.setRoot(FrontPage);
  }

  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.registerService.setUser(user);
    this.registerService.register();
    this.switchToMenu();
  }


}

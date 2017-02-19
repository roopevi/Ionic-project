import { LoginPage } from './../login/login';
import { Login } from './../../providers/login';
import { MediaplayerPage } from './../mediaplayer/mediaplayer';
import { Media } from './../../providers/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Front page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-front',
  templateUrl: 'front.html'
})
export class FrontPage {

  private images: any = [];

  constructor(public media: Media, public navCtrl: NavController, public loginService: Login) {}

  ionViewDidLoad() {
    /*if (!this.login.logged){
      this.navCtrl.push(['login']);
    }*/

    this.media.getMedia().subscribe(
      res => {
        this.images = res;
      }
    );
    console.log('ionViewDidLoad FrontPage');
  }

  openFile (fileId) {
    if(localStorage.getItem('user')!==null) {
      this.navCtrl.push(MediaplayerPage, {
      firstPassed: fileId,
    });
    }
    else {
      this.navCtrl.setRoot(LoginPage)
    }
  }

}

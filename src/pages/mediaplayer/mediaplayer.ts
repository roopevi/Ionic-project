import { Media } from './../../providers/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-mediaplayer',
  templateUrl: 'mediaplayer.html'
})
export class MediaplayerPage {

  private image: any = [];
  private user: any = [];
  public firstParam: any;
  public favourite: any;
  private likes = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public media: Media) {
    this.firstParam = this.navParams.get('firstPassed');
  }

  ionViewDidLoad() {
    this.getFile(this.firstParam);
    console.log(this.firstParam);
    console.log('ionViewDidLoad MediaplayerPage');
  }

  getName (user: any) {
    this.media.getUsername(user).subscribe (
      respon => {
        this.user = respon;
        console.log(respon);
      }
    );
  }

  getFile (file: any) {
    this.media.getSingleMedia(file).subscribe (
      res => {
        this.image = res;
        console.log(res);
        this.getName(this.image.user_id);
      }
    )
  }

  likeFile () {
    this.media.like(this.firstParam).subscribe(
      resp => {
        console.log(resp.json());
        console.log('liked!');
      }
    )
  }

  unlikeFile () {
    this.media.unlike(this.firstParam).subscribe(
      res => {
        console.log(res.json());
        console.log('unliked!')
      }
    )
  }

  checkIfLiked () {
    let user = JSON.parse(window.localStorage.getItem('user'));
    console.log(user);
    for ( let like of this.favourite) {
      if (user.user_id == like.user_id) {
        this.likes = true;
      }
    }
  }

  getFavourites (firstParam: any){
    this.media.getFavourites(firstParam).subscribe(
      res => {
        console.log(res.json());
        this.checkIfLiked();
      }
    );
  }
}


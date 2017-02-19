import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Media provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Media {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private title: any = [];
  //private fileId: any = [];
  private token: String = '';
  //private userId: any = [];

  constructor(public http: Http) {
    console.log('Hello Media Provider');
  }

  getMedia = () => {
    return this.http.get(this.url + '/tags/Beerissimo')
      .map(
        res =>
          res.json()
      );
  }

  getUsername = (userId: any) => {
    return this.http.get(this.url + '/users/' + userId + '?token=' + JSON.parse(localStorage.getItem('user')).token).map(resp => resp.json());
  }

  getSingleMedia = (fileId: any) => {
    return this.http.get(this.url + '/media/' + fileId).map(
      res =>
        res.json()
    );
  }

  getFavourites = (id: number) => {
    return this.http.get(this.url + `/favourites/file/${id}`);
  }

  like = (id: number) => {
    console.log('I like!' + id);
    this.token = JSON.parse(localStorage.getItem('user')).token;
    console.log(this.token);
    return this.http.post(this.url + `/favourites?token=`+ this.token, {"file_id": id});
  }

  unlike = (id: number) => {
    console.log('I dont like it anymore!');
    this.token = JSON.parse(localStorage.getItem('user')).token;
    console.log(this.token);
    return this.http.delete(this.url + `/favourites/file/${id}?token=` + this.token);
  }

}

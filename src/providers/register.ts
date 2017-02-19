import { Login } from './login';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Register provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Register {

  private url: String = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  constructor(public http: Http, public loginService: Login) {
    console.log('Hello Register Provider');
  }

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }


  register = () => {
    return this.http.post(this.url + '/users', this.user)
      .subscribe(
      resp => {
        const originalData = this.user;
        const dataFromServer = resp.json();

        this.user = dataFromServer;
        // convert user object to string and save userdata to local storage
        delete originalData['email'];

        this.loginService.setUser(originalData);
        this.loginService.login();
      },
      error => {
        console.log(error);
      }
      );
  }

}

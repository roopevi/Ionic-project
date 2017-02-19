import { ThumbnailPipe } from './../pipes/thumbnail';
import { LogoutPage } from './../pages/logout/logout';
import { RegisterPage } from './../pages/register/register';
import { Register } from './../providers/register';
import { LoginPage } from './../pages/login/login';
import { MediaplayerPage } from './../pages/mediaplayer/mediaplayer';
import { Login } from './../providers/login';
import { Media } from './../providers/media';
import { Upload } from './../providers/upload';
import { UploadPage } from './../pages/upload/upload';
import { FrontPage } from './../pages/front/front';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    FrontPage,
    UploadPage,
    MediaplayerPage,
    LoginPage,
    RegisterPage,
    LogoutPage,
    ThumbnailPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    FrontPage,
    UploadPage,
    MediaplayerPage,
    LoginPage,
    RegisterPage,
    LogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Upload,
  Media,
  Login,
  Register
  ]
})
export class AppModule {}

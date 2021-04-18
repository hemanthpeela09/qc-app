import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../app/shared/user.model';
import {
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user = {} as User;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'HSE Reports', url: '/hse', icon: 'document' },
    { title: 'Quality Reports', url: '/quality', icon: 'document' },
    { title: 'Welder\'s List', url: '/folder/WeldersList', icon: 'archive' },
    { title: 'WPS List', url: '/folder/WPSList', icon: 'archive' },
    { title: 'Download Report', url: '/report', icon: 'briefcase' },
    { title: 'Logout', url: 'signOut()', icon: 'power' },
 ];
  //public labels = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'];
  constructor(private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private navCtrl: NavController) { }

    ngOnInit() {
    }

    async SignOut() {
      try {
        // register user with email and password
        await this.afAuth.signOut()
        .then(data => {
          this.showToast("Logout Successfull !!!");
          this.navCtrl.navigateRoot("login");
        })
        .catch();
    } catch (e) {
      this.showToast(e);
    }
    }

    showToast(message: string) {
      this.toastCtrl
        .create({
          message: message,
          duration: 3000
        })
        .then(toastData => toastData.present());
    }
}
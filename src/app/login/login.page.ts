import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from "../shared/user.model";
import {
  ToastController,
  LoadingController,
  NavController,
  Platform
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  public showPassword: boolean = false;

  constructor(public menu: MenuController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private platform: Platform,
    private router: Router,
    private dataService: DataService) { 
    this.menu.enable(false,'custom');
  }

  ngOnInit() {
  }

  async login(user: User) {
    // console.log(user);

    if (this.formValidation()) {
      console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        // login user with email and password
        await this.afAuth
          .signInWithEmailAndPassword(user.email, user.password)
          .then(data => {
            //console.log(data);
            
            // redirect to home page
           /* this.router.navigate(['home'], {
              queryParams: data,
              });*/
            //this.navCtrl.navigateRoot("home");
            this.dataService.setData(1, data.user);
            this.router.navigateByUrl('/home');
          })
          .catch();
      } catch (e) {
        this.showToast(e);
      }

      // dismis loader
      loader.dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      // show toast message
      this.showToast("Enter email");
      return false;
    }

    if (!this.user.password) {
      // show toast message
      this.showToast("Enter password");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
  
}

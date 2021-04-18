import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user.model";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;
  public showPassword: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
  }

  async register(user: User) {
    console.log(user);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        // register user with email and password
        await this.afAuth
          .createUserWithEmailAndPassword(user.email, user.password)
          .then(data => {
            console.log(data);

            // redirect to home page
            this.navCtrl.navigateRoot("login");
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
      this.showToast("Enter Email");
      return false;
    }

    if (!this.user.phone || this.user.phone.length<0) {
      // show toast message
      this.showToast("Enter Phone Number");
      return false;
    } else  if (this.user.phone.length != 10) {
      // show toast message
      this.showToast("Enter Valid Phone Number");
      return false;
    }
   
    if (!this.user.password) {
      // show toast message
      this.showToast("Enter Password");
      return false;
    } else if (this.user.password.length < 6){
      this.showToast("Password Should be atleast 6 Characters");
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

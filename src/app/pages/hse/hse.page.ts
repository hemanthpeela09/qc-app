import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hse',
  templateUrl: './hse.page.html',
  styleUrls: ['./hse.page.scss'],
})
export class HSEPage implements OnInit {

  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  
  customActionSheetOptions: any = {  
    header: 'HSE Report',  
    subHeader: 'Select specific report to create'  
  };  

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'HSE Report created successfully',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnInit() {
    
  }

}

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

  customReportTypeOptions: any = {
      header: 'Type of Report',
      subHeader: 'Select specific report to create'  
    };  

  hazardTypeList = [
    'Environmental','Traffic Management','Fatigue','Public/Community',
    'Hazardous Material','PPE', 'Excavations', 'Toll use','Existing services', 'Electrical',
    'Mobile Plant', 'Light Vehicles', 'Weather', 'Ground Conditions',
    'Housekeeping', 'Behaviour', 'Working Practice', 'Manual Handling',
    'Other'
  ];

  incidentList = ['Injury', 'Damage', 'Breach of Procudure', 'Enviromental', 'Other'];

  nearMissList = [
    'Environmental','Existing services','Excavations','Fatigue','Electrical', 'Traffic Management','Public/Community',
    'Hazardous Material','PPE', 'Toll use',
    'Mobile Plant', 'Light Vehicles', 'Weather', 'Ground Conditions',
    'Housekeeping', 'Behaviour', 'Working Practice', 'Manual Handling',
    'Other'
  ];

  behaviourList = [
    'Obsession', 'Anxiety', 'Compulsion', 'Destructive', 'Negative', 'Vicious', 'Careless', 
    'Delebrate', 'Failure to Act'
  ];

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

  onChange(selectedReport: any){
    console.log("Selected:",selectedReport);
  }
}

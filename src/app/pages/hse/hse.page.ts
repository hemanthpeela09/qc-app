import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { 
  ToastController,
  LoadingController
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Hse } from 'src/app/shared/hse.model';
import { FirestoreService } from "src/app/services/firestore.service";


@Component({
  selector: 'app-hse',
  templateUrl: './hse.page.html',
  styleUrls: ['./hse.page.scss'],
})
export class HSEPage implements OnInit {

  hse = {} as Hse;
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

  
  constructor(public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestoreService: FirestoreService,
    private router: Router) {

    //this.afAuth.signInAnonymously();
    
    }

  async createHSEReport(hse: Hse) {

    const toast = await this.toastCtrl.create({
      message: 'HSE Report created successfully',
      duration: 2000,
      position: 'bottom'
    });
    
    if(this.formValidation()){
      let loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });

     loader.present();


      try{
        console.log("Entered Data :"+ JSON.stringify(hse));
        this.firestoreService.createHSEReport(hse);
          toast.present();
          this.router.navigateByUrl('/report');
      } catch (e){
        this.showToast(e);
      }
      
      // dismiss loader
      return await loader.dismiss();
     // toast.present(); 
      
    }
  }

  ngOnInit() {
    
  }

  onChange(selectedReport: any){
    console.log("Selected:",selectedReport);
  }

  formValidation() {

    if (!this.hse.project) {
      // show toast message
      this.showToast("Enter Project Division");
      return false;
    }

    if (!this.hse.location) {
      // show toast message
      this.showToast("Enter location");
      return false;
    }

    if (!this.hse.reportType) {
      // show toast message
      this.showToast("Enter Report Type");
      return false;
    }

    if (!this.hse.date) {
      // show toast message
      this.showToast("Enter Date");
      return false;
    }

    if (!this.hse.description) {
      // show toast message
      this.showToast("Enter Description");
      return false;
    }

    if (!this.hse.action) {
      // show toast message
      this.showToast("Enter Action");
      return false;
    }

    if (!this.hse.actionReq) {
      // show toast message
      this.showToast("Enter Action Request");
      return false;
    }

    if (!this.hse.incident) {
      // show toast message
      this.showToast("Enter Incident");
      return false;
    }

    if (!this.hse.rootcause) {
      // show toast message
      this.showToast("Enter Rootcause");
      return false;
    }


    if (!this.hse.recipients) {
      // show toast message
      this.showToast("Enter Recipients");
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
}



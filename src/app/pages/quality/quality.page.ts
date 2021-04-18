import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.page.html',
  styleUrls: ['./quality.page.scss'],
})
export class QualityPage implements OnInit {

  customActionSheetOptions: any = {  
    header: 'Quality Report',  
    subHeader: 'Select specific report to create'  
  };  

  nonConfList = [
    'Equipment Defect', 'Workmanship', 'System Defect', 'Customer Complaint', 'Supplier error'
  ];

  otherList = [
    'Equipment interface', 'Workmanship', 'Systems', 'Customer Interaction', 'Supplier Product'
  ];

  customReportTypeOptions: any = {
    header: 'Type of Report',
    subHeader: 'Select specific report to create'  
  };  
  
  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Quality Report created successfully',
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

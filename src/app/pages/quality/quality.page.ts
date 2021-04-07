import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

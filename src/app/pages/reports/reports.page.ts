import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  filterData = [];

  projects=[
    {
      id: 'value1',
      value:'Project - Steel plant',
      location:'vizag',
      type: 'enviroment',
      date: '20-01-2021'
    },
    {
      id: 'value2',
      value:'Project - HPCL',
      location:'vizag',
      type: 'enviroment',
      date: '10-01-2021'
    },
    {
      id: 'value3',
      value:'Project - BHEL',
      location:'vizag',
      type: 'hazard',
      date: '20-01-2021'
    },
    {
      id: 'value3',
      value:'Project - BHEL',
      location:'vizag',
      type: 'Hazad',
      date: '11-03-2021'
    },
    {
      id: 'value5',
      value:'Project - Railways',
      location:'Hyd',
      type: 'maintenence',
      date: '01-01-2021'
    },
    {
      id: 'value1',
      value:'Project - Steel plant',
      location:'mumbai',
      type: 'HSE',
      date: '02-01-2021'
    },
    {
      id: 'value4',
      value:'Project - Port',
      location:'vizag',
      type: 'type',
      date: '05-01-2021'
    },
    {
      id: 'value3',
      value:'Project - BHEL',
      location:'hyd',
      type: 'quality',
      date: '12-02-2021'
    },
  ];

  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  selectedValue = "";

  public getData(value: any){
    this.onButtonClick();
   // alert(this.selectedValue);
    this.filterData = this.projects.filter((location) => {
      return location.id.toLowerCase().indexOf(this.selectedValue.toLowerCase()) > -1;
    });
    
  }

  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
  
  constructor() { }

  ngOnInit() {
  }

  

}

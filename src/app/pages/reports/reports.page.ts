import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  projects=[
    {
      value1:'Project - Steel plant',
      location:'vizag',
      type: 'enviroment',
      date: '20-01-2021'
    },
    {
      value1:'Project - HPCL',
      location:'vizag',
      type: 'enviroment',
      date: '10-01-2021'
    },
    {
      value1:'Project - BHEL',
      location:'vizag',
      type: 'hazard',
      date: '20-01-2021'
    },
    {
      value1:'Project - IOCL',
      location:'vizag',
      type: 'Hazad',
      date: '11-03-2021'
    },
    {
      value1:'Project - Railways',
      location:'Hyd',
      type: 'maintenence',
      date: '01-01-2021'
    },
    {
      value1:'Project - Steel plant',
      location:'mumbai',
      type: 'HSE',
      date: '02-01-2021'
    },
    {
      value1:'Project - Port',
      location:'vizag',
      type: 'type',
      date: '05-01-2021'
    },
    {
      value1:'Project - BHEL',
      location:'hyd',
      type: 'quality',
      date: '12-02-2021'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  pages=[
    {
      title:'Report',
      url:'/reports',
      icon: 'document',
    },
    {
      title:'Report',
      children: [
          {
            title:'HSE',
            url:'/reports/hse',
            icon: 'logo-ionic'
          },
          {
            title:'Quality',
            url:'/reports/quality',
            icon: 'logo-google'
          }
      ],
    }
  
  ];

  constructor() { }

  ngOnInit() {
  }

}

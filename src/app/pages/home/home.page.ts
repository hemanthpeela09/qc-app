import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 // public home: string;
  constructor(private activatedRoute: ActivatedRoute, private menu: MenuController) { 
    this.menu.enable(true, 'custom');
  }

  ngOnInit() {}

} 

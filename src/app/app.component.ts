import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'HSE Reports', url: '/hse', icon: 'document' },
    { title: 'Quality Reports', url: '/quality', icon: 'document' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Download Report', url: '/report', icon: 'briefcase' },
    //{ title: 'Delete', url: '/folder/Spam', icon: 'warning' },
  ];
  //public labels = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'];
  constructor() {}

  
    

    
}

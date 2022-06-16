import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sobre mí', url: '/yo', icon: 'home'},
    { title: 'Contacto', url: '/contacto', icon: 'call' } ,
    { title: 'Habilidades', url: '/habilidades', icon: 'accessibility' } 
    
  ];
  constructor() {}
}

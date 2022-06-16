import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.page.html',
  styleUrls: ['./yo.page.scss'],
})
export class YoPage implements OnInit {

  joander: any = {

    nombre: " Walther Joander Olivo Macias ",
    ciudadDeNacimiento: " Guayaquil ",
    edad: 19,
    

  };
  constructor() { }

  ngOnInit() {
  }

}

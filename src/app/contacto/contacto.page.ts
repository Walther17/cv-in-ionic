import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  contacto: any = [
    'walther.olivom@ug.edu.ec',
    'wjom.0942615691@gmail.com',
    '0983274298',
    'Guayaquil, Batallón del Suburbio',
    '@waltherjoander'
   ];


educacion: any = [
     'Escuela Fiscal Mixta "Jipijapa"',
     'Unidad Educativa "27 de Octubre"',
     ' Universidad de Guayaquil (cursando)'
    ];

  constructor() { }

  ngOnInit() {
  }

}

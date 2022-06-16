import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {
  
  references: any = 
  {
  referenceOne:  "0994884891",
  referenceTwo:   "0998383838",
  referenceThree: "0999939339"
}
  constructor() { }

  ngOnInit() {
  }

}

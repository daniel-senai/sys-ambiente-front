import { Ambiente, Regional } from './../interfaces/ambiente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})
export class AmbienteComponent implements OnInit {
  regional: Regional[];
  regionalSelecionada: Regional;

  constructor() {

    
    this.regional = [];
        for (let i = 0; i < 10000; i++) {
            this.regional.push({id:  i, regional: 'Regional' + i});
        }

    this.regional = [
      { regional: 'DRGO', id: 1 },
      { regional: 'DRSP', id: 2 },
    ]
  }

  ngOnInit(): void {
  }
}

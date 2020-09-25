import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) { }
  OnInit() {
    this.primengConfig.ripple = true;
  }
  title = 'Sys Sala';
}

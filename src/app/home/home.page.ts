import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave } from '@ionic/angular'; //estas son interfaces
import { GaleriaFotosService } from './../galeria-fotos.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {
  
  constructor(
    public gaSer: GaleriaFotosService
  ) {
    console.log("constructor de Home");
  }
  ngOnInit(): void {
    console.log("OnInit de Home");
  }
  ionViewWillEnter(): void {
    this.gaSer.aumentar();
    console.log("ionViewWillEnter de Home");
  }
  ionViewDidEnter(): void {
    console.log("ionViewDidEnter de Home");
  }
  ionViewWillLeave(): void {
    console.log("ionViewWillLeave de Home");
  }
  ionViewDidLeave(): void {
    console.log("ionViewDidLeave de Home");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy de home");
  }


}

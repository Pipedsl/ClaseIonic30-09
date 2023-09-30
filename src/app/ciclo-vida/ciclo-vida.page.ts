import { Component, OnInit, OnDestroy } from '@angular/core';
import { GaleriaFotosService } from './../galeria-fotos.service'


@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.page.html',
  styleUrls: ['./ciclo-vida.page.scss'],
})
export class CicloVidaPage implements OnInit {

  constructor(
    public gaSer : GaleriaFotosService
  ) { 
    console.log("Constructor de Ciclo de vida")
  }

  ngOnInit(): void {
    console.log("OnInit de Ciclo de vida");
  }
  ionViewWillEnter(): void {
    console.log("ionViewWillEnter de Ciclo de vida");
  }
  ionViewDidEnter(): void {
    console.log("ionViewDidEnter de Ciclo de vida");
  }
  ionViewWillLeave(): void {
    console.log("ionViewWillLeave de Ciclo de vida");
  }
  ionViewDidLeave(): void {
    console.log("ionViewDidLeave de Ciclo de vida");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy de Ciclo de vida");
  }

}

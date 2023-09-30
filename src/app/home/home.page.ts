import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave } from '@ionic/angular'; //estas son interfaces

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {
  
  constructor() {
    console.log("constructor de Home");
  }
  ngOnInit(): void {
    console.log("OnInit de Home");
  }
  ionViewWillEnter(): void {
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

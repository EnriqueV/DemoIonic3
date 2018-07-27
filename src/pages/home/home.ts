import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Array<any>;

  constructor(public navCtrl: NavController,public http: Http,public loadingCtrl: LoadingController) {
    this.loadData();

  }
  loadData(){


    let loading = this.loadingCtrl.create({
      content: 'Cargando...',
      duration: 25000
    });



    loading.present();

        this.http.get('http://45.55.43.148/arsal/index.php/api/noticias').map(res => res.json()).subscribe(data => {
          this.items = data;
          loading.dismiss();

         
      });
  }

  go(page, id){
   
    var i=id;
    localStorage.id=i;
   
    this.navCtrl.push(page);

  }

}

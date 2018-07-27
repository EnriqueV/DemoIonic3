import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  icons:Array<any>;
items:Array<any>;
creado: String;
name: String;
text: String;
img:String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public http: Http,public loadingCtrl: LoadingController) {


      let loading = this.loadingCtrl.create({
        content: 'Cargando...',
        duration: 5000
      });
    
    
    
      loading.present();
         let id= localStorage.id;
      
    
          this.http.get('http://45.55.43.148/arsal/index.php/api/noticias?id='+id).map(res => res.json()).subscribe(data => {
            this.items = data;
            this.creado= this.items[0].creado;
            this.text= this.items[0].text;
            this.name= this.items[0].titulo;
            this.img= this.items[0].imageUrl;
    
            loading.dismiss();

    
            console.log(this.items);
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
   

    open(){
      window.open('https://crisscrossadventures.co.za/', '_system');
    }
}

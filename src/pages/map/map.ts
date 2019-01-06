import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private nativeGeocoder: NativeGeocoder) {

  }

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

  }


  addMarkers(){
let prompt = this.alertCtrl.create({
  title: 'Add Maker',
  message: "Enter Location",
  inputs: [
    {
      name: 'city',
      placeholder: 'City'
    },
  ],
  buttons: [
    {
      text: 'Cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
{
  text: 'Save',
  handler: data => {
    this.geoCodeandAdd(data.city);
  }
}

  ]
});
prompt.present();
  }

geoCodeandAdd(city){

  this.nativeGeocoder.forwardGeocode(city)
  .then((coordinates: NativeGeocoderForwardResult[]) =>  {
     let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    })

  .catch((error: any) => console.log(error));

}

}

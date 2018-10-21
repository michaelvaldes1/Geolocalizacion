import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  @ViewChild("map") mapElement;
  map: any;

  constructor() {
   
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
    let coords = new google.maps.LatLng(9.0740039, -79.4985519);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)
      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: coords
      })
  }

}

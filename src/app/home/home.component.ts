import { ElementRef,Component, OnInit, Input, NgZone, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from "../data.service";
import { MessageService } from "../message.service";
import { Router, NavigationExtras } from "@angular/router";
import { SearchRide } from "./search-ride";
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchControl: FormControl;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  @Input() searchRide: SearchRide= new SearchRide(null, null, '');
  latitude: number;
  longitude: number;

  constructor(private d: MessageService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone
) {}
  ngOnInit() {
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["(cities)"]
    });
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.searchRide.city_description = place.name;


        //algunos valores que retorna google objeto place por ahora se envia
        // vicinity, pero podemos enviar cod postal, latitud longitud, etc.

        console.log("place", place);
        console.log("vicinity", place.vicinity);
        console.log("longitud", place.geometry.location.lng());
        console.log("latitude", place.geometry.location.lat());

      });
    });
  });

    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });

    this.nav_bar();
  }

  buttons_animations() {

  }

  sendData(){
    // VALIDAR DATOS crear servicio

    this.d.storage = {
      "start_date": this.searchRide.start_date,
      "end_date": this.searchRide.end_date,
      "city_description": this.searchRide.city_description,
      "latitude": this.latitude,
      "longitude": this.longitude
    }
    this.router.navigate(["bicicletas"]);
  }

  nav_bar() {
    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
        wrapper = $('<div></div>');

      ele.before(wrapper);
      $(window).on('scroll resize', function() {

        var height = ele.outerHeight(),
          top = wrapper.offset().top;

        if ($(this).scrollTop() >= top) {
          wrapper.height(height);
          ele.addClass("affix");
        }
        else {
          ele.removeClass("affix");
          wrapper.height('auto');
        }
      });

      // init
      var height = ele.outerHeight(),
        top = wrapper.offset().top;

      if ($(window).scrollTop() >= top) {
        wrapper.height(height);
        ele.addClass("affix");
      }
      else {
        ele.removeClass("affix");
        wrapper.height('auto');
      }
    });
  }
}

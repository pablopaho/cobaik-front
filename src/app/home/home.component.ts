import { ElementRef,Component, OnInit, Input, NgZone, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationExtras } from "@angular/router";
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

import { LocationService } from ".././bike-results/shared/location.service";


@Component({
  selector: 'ho-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    latitude         : number;
    longitude        : number;
    city_description : string;

    public searchControl   : FormControl;
    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(private locationService: LocationService,
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
                    this.latitude         = place.geometry.location.lat();
                    this.longitude        = place.geometry.location.lng();
                    this.city_description = place.name;
                });
            });
        });

        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        this.nav_bar();
    }

    sendData(){
        this.locationService.storage = {
                          "city_description": this.city_description,
                          "latitude"        : this.latitude,
                          "longitude"       : this.longitude
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

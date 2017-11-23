import { Component, OnInit, Input } from '@angular/core';
import * as $                       from 'jquery';
import { DatepickerOptions }        from 'ng2-datepicker';
import { Observable }               from 'rxjs/Observable';

import { SearchRide }               from '../bike-search/search-ride';
import { BikeService}               from '../bike.service';
import { Bike }                     from '../bike-detail/bike';
import { DataService } from "../bike-results/data.service";



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [BikeService, DataService]
})
export class HomeComponent implements OnInit {

    date: Date;
    date2: Date;
    cityRide: String;
    bikes: Observable<Bike[]>;
    message:string;


    options: DatepickerOptions = {
        minYear: 2017,
        maxYear: 2020,
        //displayFormat:  'MMM D[,] YYYY',
        displayFormat:  'DD-MM-YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 1
    };

    constructor(private bikeService: BikeService, public data: DataService) {
    }

    @Input() searchRide: SearchRide = new SearchRide("", null, null);

    ngOnInit() {
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        this.nav_bar();
        this.data.currentMessage.subscribe(message => this.message = message)
    }

    buttons_animations(){

    }

    newMessage() {
        this.data.changeMessage("Hello from homecomponent")
    }

    onSubmit() {
        console.log('onSubmit', this.searchRide);
        //this.bikeService.searchRide();
    }

    nav_bar(){
        $('[data-toggle="affix"]').each(function() {
            var ele = $(this),
            wrapper = $('<div></div>');

            ele.before(wrapper);
            $(window).on('scroll resize', function() {

                var height = ele.outerHeight(),
                top = wrapper.offset().top;

                if ($(this).scrollTop() >= top){
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

            if ($(window).scrollTop() >= top){
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

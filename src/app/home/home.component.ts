import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { DatepickerOptions }  from 'ng2-datepicker';

import { SearchRide } from './search-ride';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    date: Date;
    date2: Date;
    cityRide: String;



    options: DatepickerOptions = {
        minYear: 2017,
        maxYear: 2020,
        //displayFormat:  'MMM D[,] YYYY',
        displayFormat:  'DD-MM-YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 1
    };

    constructor() {
    }

    @Input() searchRide: SearchRide = new SearchRide("", null, null);

    ngOnInit() {
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        this.nav_bar();
    }

    buttons_animations(){

    }

    onSubmit() {
        console.log('onSubmit', this.searchRide);
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

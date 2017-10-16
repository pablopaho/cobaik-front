import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        this.nav_bar();
    }

    buttons_animations(){

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

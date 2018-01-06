import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {DataService} from "../data.service"

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    message:string;

    constructor(private data: DataService) {


    }



    ngOnInit() {

        this.data.currentMessage.subscribe(message => this.message = message)
        
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        this.nav_bar();
    }

    buttons_animations(){

    }

    sendMessage() {
        console.log("sendMessage");
        //this.messageEvent.emit(this.message)
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

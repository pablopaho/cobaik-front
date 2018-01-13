import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from "../data.service";
import { MessageService } from "../message.service";
import { Router, NavigationExtras } from "@angular/router";
import { SearchRide } from "./search-ride";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;
  @Input() searchRide: SearchRide= new SearchRide(null, null, '');

  constructor(private d: MessageService,
    private router: Router) {

  }

  ngOnInit() {
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });

    this.nav_bar();
  }

  buttons_animations() {

  }

  sendData() {
    // VALIDAR DATOS crear servicio
    console.log("I am here", this.searchRide);
    this.d.storage = {
      "start_date": this.searchRide.start_date,
      "end_date": this.searchRide.end_date,
      "city_description": this.searchRide.city_description
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

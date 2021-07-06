import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events-service';


@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html',
    styles:[
      `
      .green { background:green !important;}
      `
    ]
})


export class EventsListComponent implements OnInit {
  events!: any []
  constructor(private eventService : EventService){
  }
  //use lifecycle hook to run event when app is initialized
  ngOnInit() {
    this.events = this.eventService.getEvents()

  }
}
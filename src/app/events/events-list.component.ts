import { Component } from '@angular/core';
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

export class EventsListComponent {
  events: any[]
  constructor(private eventService : EventService){
    this.events = this.eventService.getEvents()
  }
    
}
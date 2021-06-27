import { Component } from '@angular/core';


@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent {
    event = {
        id:1,
        name:'Angular connect',
        date:'9/07/2020',
        time:'10:00 am',
        price:600.00,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location :{
            address:'1057 Nairobi drive',
            city:'Nairobi',
            country:'Kenya'
        }
    }

}
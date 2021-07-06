import { Component,Input } from '@angular/core';


@Component({
    selector:'event-thumbnail',
    template:
    `
        <div class="well hovewell thumbnail" [ngClass] ="getBackground()">
        <h2>{{event.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="{green : event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>

        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{event?.location?.city}}, {{event?.location?.country}}</span>

        </div>
      
        </div>
    `,
    styles:[
        `
        .bg { background-color:green !important;}
        .bgten {backgroung-color : yellow !important;}

        .green {color: #003300 !important;}
        .bold { font-weight: bold;}
        .thumbnail { min-height:210px; }
        .pad-left {margin-left: 10px; }
        .well div {color :#bbb; }
        `
    ]
})


export class EventThumbnailComponent {
 
    @Input() event:any 

    getBackground() {
        if (this.event && this.event?.time === '8:00 am')
            return ['bg', 'green']
            
        else if (this.event && this.event?.time === '10:00 am')
            return['bgten','green']

        return []


        
    }

    }
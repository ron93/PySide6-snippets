import { Component,Input } from '@angular/core';


@Component({
    selector:'event-thumbnail',
    template:
    `
        <div class="well hovewell thumbnail" [ngClass] ="getBackground()">
        <h2>{{event.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getTimes()" [ngSwitch]="event?.time">
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
        .bgten { background-color:white !important;}
        .bg-default { background-color:grey !important;}
         .blue {color:yellow;}   
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
            
           //bigten not working but green works(why??) -- solved it might be color name delegation
        else if (this.event && this.event?.time === '10:00 am')
            return['bgten','green']
        else return ['bg-default']

        return []
        
    }
    getTimes() {
        if (this.event && this.event?.time === '8:00 am')
            return {color:'yellow','font-size':'20px'}
            
           //bigten not working but green works(why??) -- solved it might be color name delegation
        else if (this.event && this.event?.time === '10:00 am')
        return {color:'green','font-size':'20px'}

        return {}
    }

    }
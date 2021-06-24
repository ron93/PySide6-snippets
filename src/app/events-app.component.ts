import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template:'<events-list></events-list>'
})
export class EventsAppComponent {
  title = 'events';
}

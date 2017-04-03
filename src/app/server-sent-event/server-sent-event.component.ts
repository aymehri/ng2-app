import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

// Making Sure EventSource Type is available to avoid compilation issues.
declare var EventSource: any;

@Component({
  selector: 'app-server-sent-event',
  templateUrl: './server-sent-event.component.html',
  styleUrls: ['./server-sent-event.component.scss']
})
export class ServerSentEventComponent implements OnInit {

  someStrings: string[] = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    const observable = Observable.create(observer => {
      const eventSource = new EventSource('api/events');
      eventSource.onmessage = x => observer.next(x.data);
      eventSource.onerror = x => observer.error(x);

      return () => {
        eventSource.close();
      };
    });

    observable.subscribe({
      next: guid => {
        this.zone.run(() => this.someStrings.push(guid));
      },
      error: err => console.error('something wrong occurred: ' + err)
    });
  }

}

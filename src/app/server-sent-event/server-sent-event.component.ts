import { Subject } from 'rxjs/Subject';
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
    //const observable = this.createChangeStream();
    observable.subscribe(
      next => {
        this.zone.run(() => this.someStrings.push(next));
      },
      error => console.error('something wrong occurred: ' + error)
    );
  }

  public createChangeStream(): Observable<any> {
    const subject = new Subject();
    if (typeof EventSource !== 'undefined') {
      const emit = (msg: any) => subject.next(JSON.parse(msg.data));
      const source = new EventSource('api/events');
      source.addEventListener('data', emit);
      source.onerror = emit;
    } else {
      console.warn('SDK Builder: EventSource is not supported');
    }
    return subject.asObservable();
  }

}

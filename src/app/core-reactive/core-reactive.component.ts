import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/range';

import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/shareReplay';

@Component({
  selector: 'app-core-reactive',
  templateUrl: './core-reactive.component.html',
  styleUrls: ['./core-reactive.component.scss']
})
export class CoreReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Observable.interval(500).take(5).subscribe(createSubscriber('interval'));
    // Observable.timer(0, 1000).take(5).subscribe(createSubscriber('timer'));
    // Observable.of('Hello World').subscribe(createSubscriber('of'));
    // Observable.from(['Array', 'Yes 2']).subscribe(createSubscriber('from'));
    // Observable.from('Array').subscribe(createSubscriber('fromString'));
    // Observable.throw(new Error('Hey Error')).subscribe(createSubscriber('Error'));
    // Observable.empty().subscribe(createSubscriber('empty'));
    /*
    let sideEffect = 0;
    const defer$ = Observable.defer(() => {
      sideEffect ++;
      return Observable.of(sideEffect);
    });
    defer$.subscribe(createSubscriber('defer$.one'));
    defer$.subscribe(createSubscriber('defer$.two'));
    defer$.subscribe(createSubscriber('defer$.three'));*/
    // Observable.never().subscribe(createSubscriber('never'));
    // Observable.range(10, 30).subscribe(createSubscriber('never'));
    /*
    const simple$ = new Subject();
    simple$.subscribe(createSubscriber('simple'));
    simple$.next('Hello');
    simple$.next('World');
    simple$.complete();*/

    /*
    const interval$ = Observable.interval(1000).take(5);
    const intervalSubject$ = new Subject();
    interval$.subscribe(intervalSubject$);
    intervalSubject$.subscribe(createSubscriber('sub1'));
    intervalSubject$.subscribe(createSubscriber('sub2'));
    intervalSubject$.subscribe(createSubscriber('sub3'));
    */

    // With Subject this case will only subscribe for the first Event in isLoggedIn$ because delayed wasn't
    // subscribed before, and old data are lost, to keep tracking of old data, we have to use BehaviorSubject,
    // see next example
    /*
    const currentUser$ = new Subject();
    const isLoggedIn$ = currentUser$.map((u: IUser) => u.isLoggedIn);

    isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));

    currentUser$.next({ isLoggedIn: false });
    setTimeout(() => {
      currentUser$.next({ isLoggedIn: false, name: 'nelson' });
    }, 2000);

    setTimeout(() => {
      isLoggedIn$.subscribe(createSubscriber('delayed'));
    }, 1000);
    */

    // here we use BehaviorSubject to keep tracking of old information
    /*
    const currentUser$ = new BehaviorSubject({isLoggedIn: false});
    const isLoggedIn$ = currentUser$.map((u: IUser) => u.isLoggedIn);

    isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));
    currentUser$.next({ isLoggedIn: false });
    setTimeout(() => {
      currentUser$.next({ isLoggedIn: false});
    }, 2000);

    setTimeout(() => {
      isLoggedIn$.subscribe(createSubscriber('delayed'));
    }, 1000);
    */

    // ReplaySubject will keep track only about the 3 last Subject emitted
    // BehaviorSubject takes an initial values and emit value, but ReplaySubject emit value only when next() is called
    /*
    const replay$ = new ReplaySubject(3);
    replay$.next(1);
    replay$.next(2);
    replay$.subscribe(createSubscriber('one'));
    replay$.next(3);
    replay$.next(4);
    replay$.next(5);
    replay$.subscribe(createSubscriber('two'));
    */

    // AsyncSubject store the last value and emit values only when complete. We need to call complete() to emit values
    /*
    const apiCall$ = new AsyncSubject();
    apiCall$.next(1);
    apiCall$.subscribe(createSubscriber('one'));
    apiCall$.next(2);
    apiCall$.complete();

    setTimeout(() => {
      apiCall$.subscribe(createSubscriber('two'));
    }, 2000);
    */

    // Hot and Cold Observable :
    // convert Cold Observable to Hot Observable
    // without pusblish() and connect() operator every subscriber will take his own value from the start
    // but With publish() and connect() it makes connectable Observable
    // the interval will start only when connect is hit
    /*
    const interval$ = Observable.interval(1000)
                                .take(10)
                                .publish();

    setTimeout(() => {
      interval$.connect();
    }, 5000);

    setTimeout(() => {
      interval$.subscribe(createSubscriber('one'));
    }, 1200);

    setTimeout(() => {
      interval$.subscribe(createSubscriber('two'));
    }, 3200);
    */

    // with publishLast get only the last value even the subscriber subscribe after the event is emitted
    /*
    const simple$ = new Observable(observer => {
      observer.next('one');
      observer.next('two');
      observer.complete();
    });

    const published$ = simple$.publishLast();
    published$.subscribe(createSubscriber('one'));
    published$.connect();
    published$.subscribe(createSubscriber('two'));
    */

    // PublishReplay like publishLast : will only replay the specified number of lasts values in this example it's 2
    /*
    const simple$ = new Observable(observer => {
      observer.next('one');
      observer.next('two');
      observer.next('three');
      observer.complete();
    });

    const published$ = simple$.publishReplay(2);
    published$.subscribe(createSubscriber('one'));
    published$.connect();
    published$.subscribe(createSubscriber('two'));
    */

    // refCount and share
    const simple$ = new Observable(observer => {
      observer.next('one');
      observer.next('two');
      observer.next('three');

      return () => console.log('disposed');
    });

    // const published$ = simple$.publish().refCount(); // == simple$.share();
    const published$ = simple$.publishReplay(2).refCount(); // == simple$.shareReplay(2);

    const sub1 = published$.subscribe(createSubscriber('one'));
    const sub2 = published$.subscribe(createSubscriber('two'));

    sub1.unsubscribe();
    sub1.unsubscribe();

  }

}

function createSubscriber(tag) {
  return {
    next(item) { console.log(`${tag}.next ${item}`); },
    error(error) { console.log(`${tag}.next ${error}`); },
    complete() { console.log(`${tag}.complete`); }
  };
}

interface IUser {
  isLoggedIn: boolean;
  name?: string;
}

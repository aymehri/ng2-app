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
import 'rxjs/add/observable/concat';

import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-core-reactive-important',
  templateUrl: './core-reactive-important.component.html',
  styleUrls: ['./core-reactive-important.component.scss']
})
export class CoreReactiveImportantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    // do
    Observable.range(1, 10)
              .do(a => console.log(`From do ${a}`))
              .map(a => a * a)
              .subscribe(createSubscriber('simple'));

    // finally
    Observable.range(1, 10)
              .finally(() => console.log(`From finally `))
              .map(a => a * 2)
              .subscribe(createSubscriber('finally'));

    // finally
    Observable.range(1, 10)
              .filter(a => a < 5)
              .subscribe(createSubscriber('filter'));
    // interval
    Observable.interval(1000)
              .startWith(-1)
              .subscribe(createSubscriber('interval'));
    */

    // merge
    /*
    Observable.interval(1000)
              .merge(Observable.interval(500))
              .take(5)
              .subscribe(createSubscriber('merge'));*/
    /*
    Observable.merge(
      Observable.interval(1000).map(i => `${i} seconds`),
      Observable.interval(500).map(i => `${i} half seconds`)
    ).take(10)
    .subscribe(createSubscriber('merge2'));*/

    // concat : addition des observable
    /*
    Observable.interval(500)
      .take(3)
      .concat(Observable.range(10, 3))
      .subscribe(createSubscriber('concat1'));*/
    /*
    Observable.concat(
      Observable.interval(1000).map(i => `${i} seconds`).take(3),
      Observable.interval(500).map(i => `${i} half seconds`).take(3)
    ).subscribe(createSubscriber('concat2'));
    */

    // map
    /*
     Observable.interval(1000)
              .take(3)
              .map(a => a * a)
              .subscribe(createSubscriber('map'));
    */

    // mergeMap
    Observable.range(2, 3)
              .mergeMap(i => Observable.timer(i * 2000).map(() => `After ${i * 2} seconds`))
              .subscribe(createSubscriber('mergeMap'));

    // switchMap => don't keep the last value, just switch directly

    // reduce scan :



  }

}

function createSubscriber(tag) {
  return {
    next(item) { console.log(`${tag}.next ${item}`); },
    error(error) { console.log(`${tag}.next ${error}`); },
    complete() { console.log(`${tag}.complete`); }
  };
}

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

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/reduce';

import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/buffer';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/combineLatest';

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
    /*
    Observable.range(2, 3)
              .mergeMap(i => Observable.timer(i * 2000).map(() => `After ${i * 2} seconds`))
              .subscribe(createSubscriber('mergeMap'));*/

    // switchMap => don't keep the last value, just switch directly

    // reduce :
    /*
    Observable.range(1, 10)
              .reduce((acc, value) => acc + value)
              .subscribe(createSubscriber('reduce'));*/

    // scan
    /*Observable.range(1, 10)
              .scan((acc, value) => acc + value)
              .subscribe(createSubscriber('scan1'));*/
    /*
    Observable.range(1, 10)
              .map(i => i * i)
              .scan(([last], current) => [current, last], [])
              .subscribe(createSubscriber('scan2'));*/

    // Buffer :
    /*
    Observable.range(1, 110)
              .bufferCount(25)
              .subscribe(createSubscriber('bufferCount'));*/

    /*
    Observable.interval(500)
              .bufferTime(25)
              .subscribe(createSubscriber('bufferTime'));*/

    /*
    Observable.interval(500)
              .buffer(Observable.interval(2000))
              .subscribe(createSubscriber('buffer'));*/

    // First Last Single Skip Take
    /*
    Observable.range(1, 110).first().subscribe(createSubscriber('first'));
    Observable.range(1, 110).last().subscribe(createSubscriber('last'));
    Observable.range(1, 110).single().subscribe(createSubscriber('single1')); // accept only one throw error if more
    Observable.of(1).single().subscribe(createSubscriber('single2')); // accept only one
    Observable.range(1, 110).take(2).subscribe(createSubscriber('take'));
    Observable.range(1, 4).skip(2).subscribe(createSubscriber('skip'));*/

    /*
    Observable.interval(500)
              .skipWhile(i => i < 4)
              .takeWhile(i => i < 10)
              .subscribe(createSubscriber('skipWhile'));*/
    /*
    Observable.interval(500)
      .skipUntil(Observable.timer(2000))
      .takeUntil(Observable.timer(4000))
      .subscribe(createSubscriber('skipUntil'));*/

    // zip
    /*
    Observable.range(1, 10)
      .zip(Observable.interval(500), (left, right) => `item : ${left}, at ${right * 500}`)
      .subscribe(createSubscriber('zip'));*/

    // withLatestFrom
    /*
    Observable.interval(1000)
      .withLatestFrom(Observable.interval(500))
      .subscribe(createSubscriber('withLatestFrom'));*/

    // combineLatest
    /*
    Observable.interval(1000)
      .combineLatest(Observable.interval(500), (left, right) => left * right)
      .take(5)
      .subscribe(createSubscriber('combineLatest'));

    Observable.combineLatest(Observable.interval(1000), Observable.interval(500), (left, right) => left * right)
      .take(5)
      .subscribe(createSubscriber('combineLatest'));*/

  }

}

function createSubscriber(tag) {
  return {
    next(item) { console.log(`${tag}.next ${item}`); },
    error(error) { console.log(`${tag}.next ${error}`); },
    complete() { console.log(`${tag}.complete`); }
  };
}

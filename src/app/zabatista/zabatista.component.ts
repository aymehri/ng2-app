import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/timeInterval';


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

import 'rxjs/add/operator/takeUntil';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-zabatista',
  templateUrl: './zabatista.component.html',
  styleUrls: ['./zabatista.component.scss']
})
export class ZabatistaComponent implements OnInit {

  start$ = new Subject();
  stop$ = new Subject();
  reset$ = new Subject();

  aymen$ = Observable.merge(
    this.start$.switchMap(() => Observable.interval(1000).takeUntil(this.stop$)).map(() => 1),
    this.reset$.map(() => 0)
  )
  .scan((acc, n) => n === 0 ? 0 : acc + n);

  constructor() { }

  ngOnInit() {
  }

}

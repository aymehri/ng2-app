import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'app-zabatista',
  templateUrl: './zabatista.component.html',
  styleUrls: ['./zabatista.component.scss']
})
export class ZabatistaComponent implements OnInit {

  start$ = new Subject();
  stop$ = new Subject();
  reset$ = new Subject();
  startWith$ = new Subject<number>();

  aymen$ = Observable.merge(
    this.start$.switchMap(() => Observable.interval(1000).takeUntil(this.stop$)).map(() => 1),
    this.reset$.map(() => 0),
    this.startWith$
  ).scan((acc, value) => value === 0 ? 0 : acc + value);

  constructor() { }

  ngOnInit() {
  }

}

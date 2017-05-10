import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';


import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home Page';

  source$ = Observable.timer(1000)
    .do(() => console.log('test'))
    .mapTo({ foo: 1, bar: 2 }).share()
    .catch(err => Observable.of({ foo: 1, bar: 2 }));

  // i don't understand why this example don't work
  foo$ = this.source$.map(x => x.foo);
  bar$ = this.source$.map(x => x.bar);


  constructor() { }
  ngOnInit() { }

  get foo1$(): Observable<number> {
    return this.source$.map(x => x.foo);
  }

  get bar$1() {
    return this.source$.map(x => x.bar);
  }
}

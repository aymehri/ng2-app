import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HomeService } from './app.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../store/counter';
import { HOUR, SECOND } from './../store/clock';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  counter: Observable<number>;

  click$ = new Subject();
  clock;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
    this.clock = store.select('clock');

    this.clock = Observable
      .merge(this.click$.mapTo(HOUR), Observable.interval(1000).mapTo(SECOND))
      .startWith(new Date().toString())
      .scan((acc, value, index) => {
        const date = new Date(acc);
        if (value === SECOND) {
          date.setSeconds(date.getSeconds() + 1);
        }
        if (value === HOUR) {
          date.setHours(date.getHours() + 1);
        }
        return date;
      });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  ngOnInit(): void {
    // this.homeService.getEventByNumber(12).subscribe(console.log);

    // this.homeService.getEvent().subscribe(console.log);
  }
}

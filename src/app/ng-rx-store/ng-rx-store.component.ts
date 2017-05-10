import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { INCREMENT, DECREMENT, RESET } from './../../store/counter';
import { HOUR, SECOND } from './../../store/clock';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

interface AppState {
  counter: number;
}

interface DateState {
  clock: Date;
}

@Component({
  selector: 'app-ng-rx-store',
  templateUrl: './ng-rx-store.component.html',
  styleUrls: ['./ng-rx-store.component.scss']
})
export class NgRxStoreComponent implements OnInit {

  counter: Observable<number>;

  click$ = new Subject().mapTo(HOUR);
  seconds$ = Observable.interval(1000).mapTo(SECOND);
  clock;

  constructor(private store: Store<any>) {
    this.counter = store.select('counter');
    this.clock = store.select('clock');

    this.clock = Observable.merge(this.click$, this.seconds$)
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
      /*
    .subscribe((type) => {
      store1.dispatch({type, payload:1});
    });*/
  }

  increment() {
    this.store.dispatch({ type: INCREMENT, payload: 1 });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT, payload: 1 });
  }

  reset() {
    this.store.dispatch({ type: RESET, payload: 0 });
  }

  ngOnInit() {
  }

}

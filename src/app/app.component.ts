import { IEvent } from './event';
import { Observable } from 'rxjs/Observable';
import { HomeService } from './app.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../store/counter';

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

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
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

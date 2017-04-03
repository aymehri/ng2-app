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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  constructor() {
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  nbA$ = new Subject<number>();
  nbB$ = new Subject<number>();
  nbC$ = new Subject<number>();

  combineTwo$ = Observable
    .combineLatest(this.nbA$.startWith(0), this.nbB$.startWith(0), (left, right) => left + right)
    .startWith(0);

  result$ = Observable.combineLatest(this.combineTwo$.startWith(0), this.nbC$.startWith(0))
    .map(vals => vals[0] * vals[1])
    .startWith(0);

  constructor() { }

  ngOnInit() {
  }

}

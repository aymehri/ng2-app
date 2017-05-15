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

  combineTwo$ = Observable.combineLatest(this.nbA$, this.nbB$)
    .map(vals => vals[0] + vals[1])
    .startWith(0);

  result$ = Observable.combineLatest(this.combineTwo$, this.nbC$)
    .map(vals => vals[0] * vals[1])
    .startWith(0);

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  nbA$ = new Subject<number>();
  nbB$ = new Subject<number>();

  combineTwo$ = Observable.combineLatest(this.nbA$, this.nbB$)
                          .map(cells => cells[0] + cells[1])
                          .startWith(0);

  constructor() { }

  ngOnInit() {
  }

}

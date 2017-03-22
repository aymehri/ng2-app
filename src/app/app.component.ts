import { IEvent } from './event';
import { Observable } from 'rxjs/Observable';
import { HomeService } from './app.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  event$: Observable<IEvent>;

  constructor(private homeService: HomeService) { }

  title = 'app works!';

  ngOnInit(): void {
    // this.homeService.getEventByNumber(12).subscribe(console.log);

    // this.homeService.getEvent().subscribe(console.log);
    
  }
}

import { IEvent } from './event';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class HomeService {

  private _appUrl = 'api/events';

  constructor(private _http: Http) { }

  getEventByNumber(number: number): Observable<IEvent> {
    return this._http.get(this._appUrl + '/' + number)
      .map((response: Response) => <IEvent>response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getEvent(): Observable<IEvent> {
    return this._http.get(this._appUrl )
      .map((response: Response) => <IEvent>response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  // sample method from angular doc
  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructureArray
    // instead of just logging it to the console
    return Observable.throw(error.json().message || 'Server error');
  }
  
}

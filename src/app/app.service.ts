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

  constructor(private _http: Http) { }
  
  // sample method from angular doc
  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructureArray
    // instead of just logging it to the console
    return Observable.throw(error.json().message || 'Server error');
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class ZabatistaPipe implements PipeTransform {

  transform(entrySeconds: number, args?: any): any {
    const date = new Date(null);
    date.setSeconds(entrySeconds);
    return date.toISOString().substr(11, 8);
  }

}

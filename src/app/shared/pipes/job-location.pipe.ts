import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobLocation'
})
export class JobLocationPipe implements PipeTransform {

  transform(location: any, args?: any): any {
    if (location) {
      let newLocation = location.split(', ')
      return newLocation[0] + ', ' + newLocation[1];
    }
    return ''
  }
}

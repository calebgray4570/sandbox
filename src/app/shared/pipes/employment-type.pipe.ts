import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employmentType'
})
export class EmploymentTypePipe implements PipeTransform {

  transform(type: any, args?: any): any {
    if(type == 'fulltime') {
      return 'Full-Time'
    } else if(type == 'parttime') {
      return 'Part-Time'
    } else if(type == 'temporary') {
      return 'Temporary'
    } else if(type == 'contract') {
      return 'Contractual'
    } else if(type == 'intern') {
      return 'Internship'
    } else if(type == 'volunteer') {
      return 'Volunteer'
    } else {
      return type
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'educationType'
})
export class EducationTypePipe implements PipeTransform {

  transform(type: any, args?: any): any {
    if(type == 'none') {
      return 'None'
    } else if(type == 'high_school') {
      return 'High School Diploma'
    } else if(type == 'certificate') {
      return 'Professional Certificates'
    } else if(type == 'some_college') {
      return 'Some College'
    } else if(type == 'assotiates') {
      return 'Associates Degree'
    } else if(type == 'bachelors') {
      return 'Bachelors Degree'
    } else if(type == 'masters') {
      return 'Masters Degree'
    } else if(type == 'phd') {
      return 'Doctoral Degree'
    } else if(type == 'md') {
      return 'Professional Degree'
    } else {
      return type
    }
  }

}

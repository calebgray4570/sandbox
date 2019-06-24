import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceLevel'
})
export class ExperienceLevelPipe implements PipeTransform {

  transform(lvl: any, args?: any): any {
    if (lvl == 'entry_level') return 'Entry Level'
    if (lvl == 'mid_level') return 'Mid Level'
    if (lvl == 'senior_level') return 'Senior Level'
    return lvl
  }

}

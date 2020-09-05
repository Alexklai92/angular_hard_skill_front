import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSkill'
})
export class FilterPipe implements PipeTransform {

  transform(skills, isFinished: string = 'all'): unknown {
    if (isFinished == 'all') return skills;

    if (isFinished == 'yes') {
      return skills.filter(skill => {
        return skill.finished
      })
    } else {
      return skills.filter(skill => {
        return !skill.finished
      })
    }

  }

}

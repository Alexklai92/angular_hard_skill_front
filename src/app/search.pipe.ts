import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSkill'
})
export class SearchPipe implements PipeTransform {

  transform(skills, search: string = '') {
    if (!search.trim()) return skills

    return skills.filter( skill => {
      return skill.title.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }

}

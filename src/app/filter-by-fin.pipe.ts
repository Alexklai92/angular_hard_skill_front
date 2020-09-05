import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from './interfaces';

@Pipe({
  name: 'filterByFin'
})
export class FilterByFinPipe implements PipeTransform {

  transform(skills: Skill[], sliceByFinished=true): unknown {
    return skills;
  }

}

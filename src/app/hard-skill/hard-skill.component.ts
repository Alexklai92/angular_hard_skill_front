import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';
import { observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Skill } from '../interfaces';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent implements OnInit {

  skills$
  sNotFinished: Skill[] = []
  sFinished: Skill[] = []
  searchStr: string = ''
  isFinished: string = 'all'
  isSearching: boolean = false

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getAll().subscribe((skills: Skill[]) => {
      this.sNotFinished = skills.filter(skill => {
        return !skill.finished
      }),
      this.sFinished = skills.filter(skill => {
        return skill.finished
      })
    })
  }

}

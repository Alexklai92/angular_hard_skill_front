import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';
import { observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent implements OnInit {

  skills$
  searchStr: string = ''
  isFinished: string = 'all'
  isSearching: boolean = false

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills$ = this.skillService.getAll()
  }

}

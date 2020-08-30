import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent implements OnInit {

  skills$

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills$ = this.skillService.getAll()
  }

  getCreated(timestamp) {
    return new Date(timestamp * 1000)
  }

}

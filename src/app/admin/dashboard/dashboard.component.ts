import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  skills: Skill[] = []
  skillSub: Subscription
  destrSub: Subscription
  searchStr: string = ''
  isFinished: string = 'all'

  constructor(private skillServ: SkillService) { }

  ngOnInit(): void {
    this.skillSub = this.skillServ.getAll().subscribe(skills => {
      console.log("SkillSub working")
      this.skills = skills
    })
  }

  remove(sSkill: Skill) {
    this.destrSub = this.skillServ.remove(sSkill).subscribe(() => {
      this.skills = this.skills.filter(skill => skill.id !== sSkill.id)
    })
  }

  ngOnDestroy() {
    if (this.skillSub) {
      this.skillSub.unsubscribe()
    } else if (this.destrSub) {
      this.destrSub.unsubscribe()
    }
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

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

  remove(id: number) {
    this.destrSub = this.skillServ.remove(id).subscribe(() => {
      this.skills = this.skills.filter(skill => skill.id != id)
    })
  }

  ngOnDestroy(): void {
    if (this.skillSub) {
      console.log('skillSub destroy')
      this.skillSub.unsubscribe()
    } else if (this.destrSub) {
      console.log('destrSub destroy')
      this.destrSub.unsubscribe()
    }
  }

  getCreated(timestamp: number) {
    return new Date(timestamp * 1000)
  }

}

import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
  }

}

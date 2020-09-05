import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  skills: Skill[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

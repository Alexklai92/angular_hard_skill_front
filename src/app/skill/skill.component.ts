import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill

  allDesc: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getCreated(timestamp) {
    return new Date(timestamp * 1000)
  }

  getLink(link) {
    let newLink = link.split("/")
    return newLink[newLink.length - 1]
  }

  getDescription(desc, open=false, id) {
    if (open) {
      return desc ? desc : 'Not description'
    }
    return desc.slice(0, 20) + '...'
  }

  isComplete(finished) {
    return finished ? `yes` : `no`
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Skill } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SkillService } from 'src/app/skill.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  form: FormGroup
  skill: Skill
  submitted: boolean = false
  sSub: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private skillServ: SkillService,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.skillServ.getById(params['id'])
      })
    ).subscribe((skill: Skill) => {
      this.skill = skill
      this.form = new FormGroup({
        title: new FormControl(skill.title, Validators.required),
        author: new FormControl(skill.author, Validators.required),
        description: new FormControl(skill.description),
        finished: new FormControl(skill.finished),
        link_approve_first: new FormControl(skill.link_approve_first),
        link_approve_second: new FormControl(skill.link_approve_second),
        type: new FormControl(skill.type, Validators.required),
      })
    })
  }

  submit() {
    if (this.form.invalid) return;

    this.submitted = true

    this.sSub = this.skillServ.update({
      ...this.skill,
      title: this.form.value.title,
      author: this.form.value.author,
      description: this.form.value.description,
      finished: this.form.value.finished,
      link_approve_first: this.form.value.link_approve_first,
      link_approve_second: this.form.value.link_approve_second,
      type: this.form.value.type
    }).subscribe(() => {
      this.submitted = false
    })

    return this.router.navigate(['/admin', 'dashboard'])
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }

}

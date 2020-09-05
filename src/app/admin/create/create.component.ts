import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false

  constructor(
    private skillServ: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('Some Title', Validators.required),
      author: new FormControl('Alexandr', Validators.required),
      type: new FormControl('programming', Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      console.error('invalid this form')
      return false;
    }

    this.submitted = true

    const skill = {
        title: this.form.value.title,
        author: this.form.value.author,
        type: this.form.value.type
    }

    this.skillServ.create(skill).subscribe( response => {
      this.form.reset();
      this.submitted = false;
      console.log(response);
    })
  }

}

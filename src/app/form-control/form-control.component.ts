import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  // TODO: вынести компоненты формы сюда
  @Input() control

  constructor() { }

  ngOnInit(): void {
  }

}

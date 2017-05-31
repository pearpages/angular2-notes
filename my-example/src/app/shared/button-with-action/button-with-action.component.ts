import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-with-action',
  templateUrl: './button-with-action.component.html',
  styleUrls: ['./button-with-action.component.css']
})
export class ButtonWithActionComponent implements OnInit {

  @Input() whatToDo: Function;
  @Input() text: string;
  @Output() result: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  handleClick() {
    this.result.emit(this.whatToDo(3));
  }
}

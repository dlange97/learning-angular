import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  @Input()
  tasksDone: Array<string> = [];
  @Output()
  revertTask = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  revert(task: string) {
    this.revertTask.emit(task);
  }

}

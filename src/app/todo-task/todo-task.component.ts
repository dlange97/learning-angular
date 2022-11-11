import { Component, EventEmitter, OnInit, Output,Input} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  tasksList: Array<string> = [];
  @Output()
  emitDelete = new EventEmitter<string>;
  @Output()
  emitMarkDone = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  delete(task: string) {
    this.emitDelete.emit(task)
  }

  markDone(task: string) {
    this.emitMarkDone.emit(task)
  }

}

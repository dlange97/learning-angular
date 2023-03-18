import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  public tasksDone: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksDoneObs().subscribe((tasks: Array<Task>) =>{
      this.tasksDone = tasks;
    })
  }

  ngOnInit(): void {
  }

  public revert(task: Task) {
    this.taskService.revert(task);
  }

}

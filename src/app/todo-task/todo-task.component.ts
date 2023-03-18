import { Component, OnInit} from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  public tasksList: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
      this.tasksList = tasks;
    })
  }

  ngOnInit(): void {
  }

  public delete(task: Task) {
    this.taskService.delete(task);
  }

  public markDone(task: Task) {
    this.taskService.markDone(task);
  }

}

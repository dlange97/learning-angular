import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public newTask: string = '';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  public addTask() {
    const task: Task = ({
      name: this.newTask,
      createdAt: new Date().toDateString()
    });
    this.taskService.addTask(task);
    this.newTask = '';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  addTask(task: string) {
    this.tasksList.push(task);
  }

  delete(task: string) {
    this.tasksList = this.tasksList.filter(e => e !==task);
  }

  markDone(task: string) {
    this.tasksDone.push(task);
    this.delete(task);
  }
}

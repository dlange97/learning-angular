import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from '../models/task';

@Injectable()
export class TaskService{

    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);
  
    public addTask(task: Task): void {
      this.tasksList.push(task);
      this.tasksListObs.next(this.tasksList);
    }
  
    public delete(task: Task): void {
      this.tasksList = this.tasksList.filter(e => e !==task);
      this.tasksListObs.next(this.tasksList);
    }
  
    public markDone(task: Task): void {
      this.tasksDone.push(task);
      this.delete(task);
      this.tasksDoneObs.next(this.tasksDone);
    }
  
    public revert(task: Task): void {
      this.tasksList.push(task);
      this.deleteTasksDone(task);
      this.tasksListObs.next(this.tasksList);
    }
  
    public deleteTasksDone(task: Task): void {
      this.tasksDone = this.tasksDone.filter(e => e !==task);
      this.tasksDoneObs.next(this.tasksDone);
    }

    public getTasksListObs(): Observable<Array<Task>> {
      return this.tasksListObs.asObservable();
    }

    public getTasksDoneObs(): Observable<Array<Task>> {
      return this.tasksDoneObs.asObservable();
    }
}
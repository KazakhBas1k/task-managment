import { Injectable } from '@angular/core';
import {HttpService} from "@core/services/http.service";
import {TaskItem} from "@shared/models/task";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpService) {}
  createTask(body: TaskItem): Observable<boolean> {
    return this.http.post('tasks', body);
  }
  getAllTasks(): Observable<TaskItem[]>{
    return this.http.get('tasks');
  }
  updateTask(id: number, body: TaskItem): Observable<boolean> {
    return this.http.update(id, body, 'tasks');
  }
  deleteTask(id: number):Observable<boolean> {
    return this.http.delete(id, 'tasks');
  }
}

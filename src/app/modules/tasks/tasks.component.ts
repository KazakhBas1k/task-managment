import {Component, OnInit} from '@angular/core';
import {TaskItem} from "@shared/models/task";
import {Status} from "@shared/constants/task-enums";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreateComponent} from "./components/task-create/task-create.component";
import {TaskService} from "./services/task.service";
import {Subject} from "rxjs";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  public toDoTasks: TaskItem[] = [];
  public onProgressTasks: TaskItem[] = [];
  public doneTasks: TaskItem[] = [];
  public refresh: Subject<void> = new Subject<void>();
  public tasksNumber: number;
  constructor(private MatDialog: MatDialog, private taskService: TaskService) {
  }
  ngOnInit() {
    this.getTasks();
    this.refresh.subscribe(() => {
      this.resetTasks();
      this.getTasks();
    });
  }
  getTasks() {
    this.taskService.getAllTasks().subscribe(data => {
      if (data.length > 0) {
        this.tasksNumber = data.length;
        data.forEach((item, index) => {
          switch (item.status) {
            case Status.ToDo:
              this.toDoTasks.push({id: index, ...item});
              break;
            case Status.OnProgress:
              this.onProgressTasks.push({id: index, ...item});
              break;
            case Status.Done:
              this.doneTasks.push({id: index, ...item});
              break;
          }
        });
      }
    })
  }
  openModal() {
    this.MatDialog.open(TaskCreateComponent, {
      position: {
        right: '0',
        top: '0'
      },
      height: '100%',
      data: {
        refresh: this.refresh
      }
    });
  }
  resetTasks() {
    this.doneTasks = [];
    this.onProgressTasks = [];
    this.toDoTasks = [];
  }
}

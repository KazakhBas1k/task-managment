import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "@shared/models/task";
import {DateService} from "@shared/services/date.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskEditComponent} from "../task-edit/task-edit.component";
import {Subject} from "rxjs";
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit {
  @Input() taskInfo: TaskItem;
  @Input() refresh: Subject<void>;
  public date: string;
  constructor(public dateService: DateService, private dialog: MatDialog) {
  }
  ngOnInit() {
    this.date = this.dateService.viewFormat(new Date(this.taskInfo.taskDate));
  }
  edit() {
    const dialogRef = this.dialog.open(TaskEditComponent, {
      position: {
        right: '0',
        top: '0'
      },
      height: '100%',
      data: {
        taskInfo: this.taskInfo
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res === 'deleted' || res === 'updated') {
        this.refresh.next();
      }
    })
  }
}

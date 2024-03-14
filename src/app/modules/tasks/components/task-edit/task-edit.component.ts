import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskItem} from "@shared/models/task";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent implements OnInit{
  public form: FormGroup;
  public dateNow: string = new Date().toISOString().split('T')[0];
  constructor(public dialogRef: MatDialogRef<TaskEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {taskInfo: TaskItem},
              private fb: FormBuilder,
              private taskService: TaskService
              ) {}
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    const {taskName, projectName, description, taskDate, timeFrom, timeTo, priority, assigneeName, status} = this.data.taskInfo;
    this.form = this.fb.group({
      taskName: new FormControl(taskName, Validators.required),
      projectName: new FormControl(projectName, Validators.required),
      description: new FormControl(description, Validators.required),
      taskDate: new FormControl(taskDate, Validators.required),
      timeFrom: new FormControl(timeFrom, Validators.required),
      timeTo: new FormControl(timeTo, Validators.required),
      priority: new FormControl(priority, Validators.required),
      assigneeName: new FormControl(assigneeName, Validators.required),
      status: new FormControl(status, Validators.required)
    })
  }
  close(result: string) {
    this.dialogRef.close(result);
  }
  save() {
    if (this.data.taskInfo.id !== undefined && this.form.valid) {
      this.taskService.updateTask(this.data.taskInfo.id, this.form.value).subscribe(isOk => {
        if (isOk) {
          this.close('updated');
        }
      })
    } else {
      alert('Fill all forms')
    }
  }
  delete() {
    if (this.data.taskInfo.id !== undefined) {
      this.taskService.deleteTask(this.data.taskInfo.id).subscribe(isOk => {
        if (isOk) {
          this.close('deleted');
        }
      });
    }
  }
}

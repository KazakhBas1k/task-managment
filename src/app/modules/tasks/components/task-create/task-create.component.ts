import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateService} from "@shared/services/date.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {Status} from "@shared/constants/task-enums";
import {Subject} from "rxjs";
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent implements OnInit {
  public dateNow: {
    view: string,
    input: string,
  };
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TaskCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {refresh: Subject<void>},
    private dateService: DateService,
    private fb: FormBuilder,
    private taskService: TaskService,
  ) {
    this.dateNow = {
      view: this.dateService.viewFormat(new Date()),
      input: new Date().toISOString().split('T')[0],
    };
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      taskName: new FormControl(null, Validators.required),
      projectName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      taskDate: new FormControl(null, Validators.required),
      timeFrom: new FormControl(null, Validators.required),
      timeTo: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      assigneeName: new FormControl(null, Validators.required),
    })
  }
  save() {
    if (this.form.valid) {
      this.taskService.createTask({
        status: Status.ToDo,
        ...this.form.value
      }).subscribe(isOk => {
        if (isOk) {
          this.dialogRef.close();
          this.data.refresh.next();
        }
      });
    } else {
      alert('Fill all forms');
    }
  }
  close() {
    this.dialogRef.close();
  }
}

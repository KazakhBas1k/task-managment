import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import {TasksComponent} from "./tasks.component";
import {TaskCardComponent} from "./components/task-card/task-card.component";
import {TaskProgressComponent} from "./components/task-progress/task-progress.component";
import {SharedModule} from "@shared/shared.module";
import {TaskCreateComponent} from "./components/task-create/task-create.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomSelectDirective} from "@shared/directives/custom-select.directive";
import {TaskEditComponent} from "./components/task-edit/task-edit.component";


@NgModule({
  declarations: [TasksComponent, TaskCardComponent, TaskProgressComponent, TaskCreateComponent, TaskEditComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
        MatInputModule,
        ReactiveFormsModule,
        CustomSelectDirective
    ]
})
export class TasksModule { }

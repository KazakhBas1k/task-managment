import {Priority, Status} from "../constants/task-enums";
export interface TaskItem {
  id?: number;
  taskName: string;
  projectName: string;
  description: string;
  taskDate: string;
  timeFrom: string;
  timeTo: string;
  priority: Priority;
  assigneeName: string;
  status: Status;

}
export interface TaskIdItem {
  id: number;
  task: TaskItem;
}

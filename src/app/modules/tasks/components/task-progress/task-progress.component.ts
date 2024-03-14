import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent implements OnInit {
  @Input() all: number;
  @Input() done: number;
  public percentage: number;
  ngOnInit() {
    this.percentage = this.calc(100);
  }
  calc(num: number) {
    return num * this.done / this.all;
  }
}

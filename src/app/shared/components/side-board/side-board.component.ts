import { Component } from '@angular/core';
import {DateService} from "@shared/services/date.service";

@Component({
  selector: 'app-side-board',
  templateUrl: './side-board.component.html',
  styleUrl: './side-board.component.scss'
})
export class SideBoardComponent {
  public dateNow: string;
  constructor(private dateService: DateService) {
    this.dateNow = this.dateService.viewFormat(new Date())
  }
}

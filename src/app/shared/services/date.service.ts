import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  viewFormat(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits for month
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

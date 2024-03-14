import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {TaskItem} from "@shared/models/task";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor() {}

  public get(key: string): Observable<TaskItem[]> {
    const itemByKey = localStorage.getItem(key);
    if (itemByKey !== null) {
      return of (JSON.parse(itemByKey))
    } else {
      return of ([]);
    }
  }

  public post(key: string, body: any): Observable<boolean> {
    const itemByKey = localStorage.getItem(key);
    if (itemByKey !== null) {
      const array: TaskItem[] = JSON.parse(itemByKey)
      array.push(body);
      localStorage.setItem(key, JSON.stringify(array));
    } else {
      localStorage.setItem(key, JSON.stringify([body]));
    }
    return of (true);
  }

  public delete(id: number, key: string): Observable<boolean> {
    const itemByKey = localStorage.getItem(key);
    if (itemByKey !== null) {
      const array: TaskItem[] = JSON.parse(itemByKey);
      const filteredArray = array.filter((item, index) => index !== id);
      localStorage.setItem(key, JSON.stringify(filteredArray));
      return of (true)
    } else {
      return of (false);
    }
  }

  public update(id: number, body: TaskItem, key: string): Observable<boolean> {
    const itemByKey = localStorage.getItem(key);
    if (itemByKey !== null) {
      const array: TaskItem[] = JSON.parse(itemByKey);
      const mappedArray = array.map((item, index) => {
        if (index === id) {
          return body;
        } else {
          return item;
        }
      });
      localStorage.setItem(key, JSON.stringify(mappedArray));
      return of (true)
    } else {
      return of (false);
    }
  }
}

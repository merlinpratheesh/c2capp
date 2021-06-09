import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  name: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  leftMenuPress = new Subject();
  constructor() { }
}

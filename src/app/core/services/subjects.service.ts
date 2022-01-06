import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject,ReplaySubject,AsyncSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  subjects = new Subject();
  behaviourSubject = new BehaviorSubject(true);
  replaySubject = new ReplaySubject(4);
  asyncSubject = new AsyncSubject();

  constructor() { }
}

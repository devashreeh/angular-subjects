import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../core/services/subjects.service';

@Component({
  selector: 'app-behaviour-subjects',
  templateUrl: './behaviour-subjects.component.html',
  styleUrls: ['./behaviour-subjects.component.scss'],
})
export class BehaviourSubjectsComponent implements OnInit {
  subjectValue: any;
  behaviourValue: any;
  replayValue: any = [];
  asyncValue: any = [];

  constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.subjectsService.subjects.subscribe((response) => {
      this.subjectValue = response;
    });
    this.subjectsService.behaviourSubject.subscribe((response) => {
      this.behaviourValue = response;
    });
    this.subjectsService.asyncSubject.subscribe((response) => {
      this.asyncValue = response;
    });
  }

  subscribeHere() {
    this.subjectsService.subjects.next('This is Subject');

    this.subjectsService.behaviourSubject.next(false);

    this.subjectsService.replaySubject.next('This is replay value 1');
    this.subjectsService.replaySubject.next('This is replay value 2');
    this.subjectsService.replaySubject.next('This is replay value 3');
    this.subjectsService.replaySubject.next('This is replay value 4');
    this.subjectsService.replaySubject.next('This is replay value 5');
    this.subjectsService.replaySubject.next('This is replay value 6');

    this.subjectsService.asyncSubject.next('This is async value 1');
    this.subjectsService.asyncSubject.next('This is async value 2');
 
    this.subjectsService.asyncSubject.next('This is async value 3');
    this.subjectsService.asyncSubject.complete();

    this.subjectsService.replaySubject.subscribe((response) => {
      this.replayValue.push(response);
    });
  }
}

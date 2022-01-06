import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectsComponent } from './behaviour-subjects.component';

describe('BehaviourSubjectsComponent', () => {
  let component: BehaviourSubjectsComponent;
  let fixture: ComponentFixture<BehaviourSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

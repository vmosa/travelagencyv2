import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTransportSectionComponent } from './task-transport-section.component';

describe('TaskTransportSectionComponent', () => {
  let component: TaskTransportSectionComponent;
  let fixture: ComponentFixture<TaskTransportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTransportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTransportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

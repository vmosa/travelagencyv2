import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPartySectionComponent } from './task-party-section.component';

describe('TaskPartySectionComponent', () => {
  let component: TaskPartySectionComponent;
  let fixture: ComponentFixture<TaskPartySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPartySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPartySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

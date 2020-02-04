import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlaceSectionComponent } from './task-place-section.component';

describe('TaskPlaceSectionComponent', () => {
  let component: TaskPlaceSectionComponent;
  let fixture: ComponentFixture<TaskPlaceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPlaceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlaceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmainComponent } from './taskmain.component';

describe('TaskmainComponent', () => {
  let component: TaskmainComponent;
  let fixture: ComponentFixture<TaskmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

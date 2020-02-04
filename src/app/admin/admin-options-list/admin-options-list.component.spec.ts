import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionsListComponent } from './admin-options-list.component';

describe('AdminOptionsListComponent', () => {
  let component: AdminOptionsListComponent;
  let fixture: ComponentFixture<AdminOptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

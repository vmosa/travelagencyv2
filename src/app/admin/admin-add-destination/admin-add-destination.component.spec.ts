import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDestinationComponent } from './admin-add-destination.component';

describe('AdminAddDestinationComponent', () => {
  let component: AdminAddDestinationComponent;
  let fixture: ComponentFixture<AdminAddDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

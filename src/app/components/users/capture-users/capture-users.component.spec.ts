import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureUsersComponent } from './capture-users.component';

describe('CaptureUsersComponent', () => {
  let component: CaptureUsersComponent;
  let fixture: ComponentFixture<CaptureUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

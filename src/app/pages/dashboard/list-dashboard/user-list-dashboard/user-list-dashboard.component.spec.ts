import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDashboardComponent } from './user-list-dashboard.component';

describe('UserListDashboardComponent', () => {
  let component: UserListDashboardComponent;
  let fixture: ComponentFixture<UserListDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListDashboardComponent]
    });
    fixture = TestBed.createComponent(UserListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

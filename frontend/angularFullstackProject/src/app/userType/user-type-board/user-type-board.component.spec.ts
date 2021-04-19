import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeBoardComponent } from './user-type-board.component';

describe('UserTypeBoardComponent', () => {
  let component: UserTypeBoardComponent;
  let fixture: ComponentFixture<UserTypeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

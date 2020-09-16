import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseLogComponent } from './expense-log.component';

describe('ExpenseLogComponent', () => {
  let component: ExpenseLogComponent;
  let fixture: ComponentFixture<ExpenseLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

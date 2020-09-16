import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseIncomeAdderComponent } from './expense-income-adder.component';

describe('ExpenseIncomeAdderComponent', () => {
  let component: ExpenseIncomeAdderComponent;
  let fixture: ComponentFixture<ExpenseIncomeAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseIncomeAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseIncomeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../service/budget.service';
import { SharedService } from '../sharedService';

@Component({
  selector: 'app-expense-income-adder',
  templateUrl: './expense-income-adder.component.html',
  styleUrls: ['./expense-income-adder.component.css']
})
export class ExpenseIncomeAdderComponent implements OnInit {
  balance:number;
  expenseReason:string;
  expenseAmount:number;
  incomeReason: string;
  incomeAmount: number;


  constructor(private budgetService:BudgetService,private shareService: SharedService) { }

  ngOnInit(): void {
  }

  AddExpense(e: any){

    e.preventDefault();

    this.budgetService.addExpense(this.expenseReason,this.expenseAmount).forEach((data) => {
      this.balance = data.remaining_amount;
      this.shareService.setBalance(this.balance);

    })
  }

  AddIncome(e: any){

    e.preventDefault();

    this.budgetService.addIncome(this.incomeReason,this.incomeAmount).forEach((data) => {
      this.balance = data.remaining_amount;
      this.shareService.setBalance(this.balance);
       })

  }

}

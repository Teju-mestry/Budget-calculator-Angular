import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeLogComponent } from './income-log/income-log.component';
import { ExpenseLogComponent } from './expense-log/expense-log.component';
import { RemainingAmountComponent } from './remaining-amount/remaining-amount.component';
RemainingAmountComponent

const routes: Routes = [
  { path: '',
    component: RemainingAmountComponent
  },
  { path: 'balance',
    component: RemainingAmountComponent
  },
  { path: 'income-log', 
  component: IncomeLogComponent },
  { path: 'expense-log', 
  component: ExpenseLogComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

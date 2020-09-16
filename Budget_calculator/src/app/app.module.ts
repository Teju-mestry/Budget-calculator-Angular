import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IncomeLogComponent } from './income-log/income-log.component';
import { ExpenseLogComponent } from './expense-log/expense-log.component';
import { RemainingAmountComponent } from './remaining-amount/remaining-amount.component';
import { ExpenseIncomeAdderComponent } from './expense-income-adder/expense-income-adder.component';
import { SharedService } from './sharedService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomeLogComponent,
    ExpenseLogComponent,
    RemainingAmountComponent,
    ExpenseIncomeAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

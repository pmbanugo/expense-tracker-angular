import { Component, OnInit } from "@angular/core";
import IExpense from "../expenses/expense";
import { ExpenseService } from "../expenses/expense.service";

@Component({
  selector: "et-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private _expenseService: ExpenseService;
  constructor(expenseService: ExpenseService) {
    this._expenseService = expenseService;
    this.expenses = this._expenseService.getExpenses();
  }

  expenses: IExpense[];
  currentMonthSpending = { amount: 300, month: "July" };
  lastMonthSpending = { amount: 44, month: "August" };

  ngOnInit() {}
}

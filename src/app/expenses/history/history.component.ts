import { Component } from "@angular/core";
import { ExpenseService } from "../expense.service";
import IExpense from "../expense";

@Component({
  selector: "et-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent {
  expenses: IExpense[] = [];
  constructor(private expenseService: ExpenseService) {}

  getExpense(period: string) {
    if (period) {
      this.expenseService.getExpenses(period).subscribe(
        expenses => {
          this.expenses = expenses;
        },
        error => {
          console.log("Error retrieving expenses", error);
        }
      );
    }
  }
}

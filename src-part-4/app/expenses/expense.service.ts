import IExpense from "./expense";
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class ExpenseService {
  getExpenses(): IExpense[] {
    return [
      {
        description: "First shopping for the month",
        amount: 20,
        date: "2019-08-12"
      },
      {
        description: "Bicycle for Amy",
        amount: 10,
        date: "2019-08-08"
      },
      {
        description: "First shopping for the month",
        amount: 14,
        date: "2019-08-21"
      }
    ];
  }
}

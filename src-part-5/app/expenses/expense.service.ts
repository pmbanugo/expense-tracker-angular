import IExpense from "./expense";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  private url = "api/expenses.json";
  constructor(private http: HttpClient) {}
  getExpenses(date: string): Observable<IExpense[]> {
    return this.http.get<IExpense[]>(this.url).pipe(
      map(expenses => {
        return expenses.filter(e => e.date.includes(date));
      })
    );
  }

  getTotalSpending(date: string): Observable<number> {
    return this.getExpenses(date).pipe(
      map(expenses => {
        return expenses
          .filter(e => e.date.includes(date))
          .reduce((previous, current) => previous + current.amount, 0);
      })
    );
  }
}

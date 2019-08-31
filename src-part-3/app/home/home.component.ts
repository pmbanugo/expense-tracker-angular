import { Component, OnInit } from "@angular/core";
import IExpense from "../expenses/expense";

@Component({
  selector: "et-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  expenses: IExpense[] = [
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
  currentMonthSpending = { amount: 300, month: "July" };
  lastMonthSpending = { amount: 44, month: "August" };

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";
import IExpense from "../expense";

@Component({
  selector: "et-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.css"]
})
export class ExpenseListComponent implements OnInit {
  constructor() {}
  @Input() expenses: IExpense[] = [];
  @Input() showButton: boolean = true;
  ngOnInit() {}
}

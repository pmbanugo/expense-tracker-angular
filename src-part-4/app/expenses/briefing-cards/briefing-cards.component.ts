import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "et-briefing-cards",
  templateUrl: "./briefing-cards.component.html",
  styleUrls: ["./briefing-cards.component.css"]
})
export class BriefingCardsComponent implements OnInit {
  constructor() {}
  @Input() currentMonthSpending: object;
  @Input() lastMonthSpending: object;
  ngOnInit() {}
}

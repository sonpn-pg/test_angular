import { Component, Input, OnInit } from "@angular/core";
import { UserData } from "src/app/interface";

@Component({
  selector: "app-answer-item",
  templateUrl: "./answer-item.component.html",
  styleUrls: ["./answer-item.component.css"],
})
export class AnswerItemComponent implements OnInit {
  @Input() data!: UserData;
  constructor() {}

  ngOnInit(): void {}
}

import { DataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.css"],
})
export class AnswerComponent implements OnInit {
  userData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.userData = this.dataService.userData.value;
  }
}

import { UserData } from "./../../interface/index";
import { DataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.css"],
})
export class BuilderComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}
  userQuestionList: UserData[] = [];
  ngOnInit() {
    this.userQuestionList = this.dataService.userData.value;
  }

  onSubmit() {}

  onReceiveModalData(modalData: UserData) {
    this.userQuestionList.push(modalData);
    this.dataService.setUserData(this.userQuestionList);
  }

  goToAnswer() {
    this.router.navigate(["form/answer"]);
  }
}

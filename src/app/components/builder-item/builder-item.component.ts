import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import { UserData } from "src/app/interface";
import { QUESTION_TYPE } from "src/constants";

@Component({
  selector: "app-builder-item",
  templateUrl: "./builder-item.component.html",
  styleUrls: ["./builder-item.component.css"],
})
export class BuilderItemComponent implements OnInit {
  @Input() question!: UserData;
  @Output() modalData = new EventEmitter<boolean>();
  public QUESTION_TYPE = QUESTION_TYPE;
  public validate = {
    dirty: true,
    touch: false
  }
  constructor() {}

  ngOnInit(): void {}
  
  checkValidate(value: any) {
    this.validate.dirty = !value;
  }
  
  blurInput() {
    if(!this.validate.touch) {
      this.validate.touch = true;
    }
  }
  
  checkValidateChecklist() {
    this.validate.dirty = this.question.answers.findIndex((item: any) => item.checked) == -1
  }
}

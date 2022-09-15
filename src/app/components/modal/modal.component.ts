import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { CheckBox, UserData } from "src/app/interface";
import { QUESTION_TYPE } from "src/constants";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  @Output() modalData = new EventEmitter<UserData>();
  public QUESTION_TYPE = QUESTION_TYPE;
  constructor(private fb: FormBuilder, private modalService: NgbModal) {}
  closeResult = "";
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      questionType: QUESTION_TYPE.CHECKBOX,
      questionTitle: ["", Validators.required],
      answers: this.fb.array([]),
      allowOwnAnswer: false,
      required: false,
      answerTitle: "",
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  get isCheckboxType(): boolean {
    return (
      this.formGroup.controls["questionType"].value == QUESTION_TYPE.CHECKBOX
    );
  }

  get answers(): FormArray {
    return this.formGroup.get("answers") as FormArray;
  }

  addAnswers() {
    this.answers.push(
      this.fb.group({
        title: "",
        checked: false,
      })
    );
  }

  onSubmit() {
    let modalData: UserData = this.formGroup.value;
    if (modalData.allowOwnAnswer) {
      const otherCheckBox: CheckBox = {
        title: "Other",
        checked: false,
      };
      modalData.answers.push(otherCheckBox);
    }
    this.modalData.emit(modalData);
    this.modalService.dismissAll("Save click");
    this.formGroup.reset();
  }
}

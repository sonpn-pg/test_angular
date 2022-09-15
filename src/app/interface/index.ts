export interface UserData {
  questionType: string;
  questionTitle: string;
  answers: CheckBox[];
  allowOwnAnswer: boolean;
  required: boolean;
  answerTitle: string;
}

export interface CheckBox {
  checked: boolean;
  title: string;
}

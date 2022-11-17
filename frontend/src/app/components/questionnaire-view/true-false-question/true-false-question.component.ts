import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnswerOption } from 'src/app/models/AnswerOption';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  question!: Question
  constructor(changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  onChange(idOption: number): void {
    let tempAnswer = this.question.answers[0]

    if (tempAnswer.answerOptions.length == 0) {
      tempAnswer.answerOptions.push(new AnswerOption({idOption: idOption, idAnswer: tempAnswer.id}))
    } else {
      tempAnswer.answerOptions[0].idAnswer = tempAnswer.id;
      tempAnswer.answerOptions[0].idOption = idOption;
    }
  }
 
  validateSelection(): boolean {
    return this.question.answers.length > 0 &&((this.question.answers[0].answerOptions.length > 0) || this.question.isOptional!)
  }
}

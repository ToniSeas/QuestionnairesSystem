import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/Answer';
import { AnswerOption } from 'src/app/models/AnswerOption';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  question!: Question

  constructor(changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onChange(idOption: number): void {
    let tempAnswer = this.question.answers[0]
    let index = 0
    let exists = false

    tempAnswer.answerOptions.forEach(answerOption => {
      if (answerOption.idAnswer == tempAnswer.id && answerOption.idOption == idOption) {
        exists = true;
        return;
      }
      index++;
    });

    exists == false ?
      tempAnswer.answerOptions.push(new AnswerOption({ idAnswer: tempAnswer.id, idOption: idOption }))
      :
      tempAnswer.answerOptions.splice(index, 1)
  }

  validateSelection(): boolean {
    return (this.question.answers[0].answerOptions.length > 0) || this.question.isOptional!
  }
  
}
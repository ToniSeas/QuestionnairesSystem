import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/Answer';
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

  onChange(id: number): void {
    this.question.options.forEach(element => {
      if (element.id == id) {
          let tempAnswer = this.question.answers[0]
          let index = tempAnswer.options.indexOf(element)
          if (index > -1) {
            tempAnswer.options.splice(index, 1)
          } else {
            tempAnswer.options.push(element)
          }
      }
    });
  }
 
  validateSelection(): boolean {
    return (this.question.answers[0].options.length > 0) || this.question.isOptional!
  }
}

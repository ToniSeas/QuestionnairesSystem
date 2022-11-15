import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-numeric-question',
  templateUrl: './numeric-question.component.html',
  styleUrls: ['./numeric-question.component.css']
})
export class NumericQuestionComponent implements OnInit {
 
  question!: Question

  areaControl: FormControl = new FormControl();

  constructor(changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  updateAnswer(): void {
    this.question.answers[0].answerText = this.areaControl.value
    console.log("Updating")
  }
 
  validateSelection(): boolean {
    return ((this.question.answers[0].answerText!.length > 0)) || this.question.isOptional!
  }

  isNumber(value: string | number): boolean {
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }

  validateNumbers(): boolean {
    return this.isNumber(this.areaControl.value)
  }
}

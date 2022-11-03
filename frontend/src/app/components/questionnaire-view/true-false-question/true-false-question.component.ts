import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  onChange(id: number): void {
    this.question.options.forEach(element => {
      if (element.id == id) {
        element.selected = true
      } else {
        element.selected = false
      }
    });
  }

  validateSelection(): boolean {
    if (this.question.isOptional) {
      return true
    }

    let valid = false
    this.question.options.forEach(element => {
      if (element.selected) {
        valid = true
      }
    });
    return !valid
  }
}

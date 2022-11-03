import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-scale-question',
  templateUrl: './scale-question.component.html',
  styleUrls: ['./scale-question.component.css']
})
export class ScaleQuestionComponent implements OnInit {

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

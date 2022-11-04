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

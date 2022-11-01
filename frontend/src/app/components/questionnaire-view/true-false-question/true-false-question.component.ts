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

}

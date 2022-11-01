import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';


@Component({
  selector: 'app-single-choice-question',
  templateUrl: './single-choice-question.component.html',
  styleUrls: ['./single-choice-question.component.css']
})
export class SingleChoiceQuestionComponent implements OnInit {

  question!: Question
  constructor(changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}

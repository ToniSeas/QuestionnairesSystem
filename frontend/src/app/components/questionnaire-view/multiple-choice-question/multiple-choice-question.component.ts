import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  question!: Question
  constructor(changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

}

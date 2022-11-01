import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-long-answer-question',
  templateUrl: './long-answer-question.component.html',
  styleUrls: ['./long-answer-question.component.css']
})
export class LongAnswerQuestionComponent implements OnInit {

  question!: Question

  areaControl: FormControl = new FormControl();

  constructor(changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}

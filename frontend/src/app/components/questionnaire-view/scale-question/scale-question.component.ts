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

}

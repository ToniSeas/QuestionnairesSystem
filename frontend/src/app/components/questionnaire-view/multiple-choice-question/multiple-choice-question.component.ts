import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        element.selected = !element.selected
      }
      console.log(element.id + " " + element.selected)
    });
  }

}

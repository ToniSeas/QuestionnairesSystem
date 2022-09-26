import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-results',
  templateUrl: './questionnaire-results.component.html',
  styleUrls: ['./questionnaire-results.component.css']
})
export class QuestionnaireResultsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.changeName();
  }

  QuestionnaireName: string = "";

  changeName(): void {
    this.QuestionnaireName = "Hola";
  }
}

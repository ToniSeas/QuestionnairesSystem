import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Questionnaire } from 'src/app/models/Questionnaire';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent implements OnInit {
  
  public questionnaire: Questionnaire;

  constructor() { 
    this.questionnaire = new Questionnaire({ });
  }

  ngOnInit(): void { }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireReviewer } from 'src/app/models/QuestionnaireReviewer';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent implements OnInit {
  
  public questionnaire: Questionnaire;
  public isModify: boolean;
  public questionnaireReviewers: QuestionnaireReviewer[];

  constructor(public questionnaireService: QuestionnaireService, private router: Router) { 
    this.questionnaire = new Questionnaire({ });
    this.isModify=false;
    this.questionnaireReviewers = [];
  }

  ngOnInit(): void { 
    let idQuestionnaire = Number(this.router.url.replace("/modify-questionnaire/", ""))
    if (!isNaN(idQuestionnaire)) {
     
      this.questionnaireService.getQuestionnaireById(idQuestionnaire).subscribe((responseDto) => {
        this.isModify=true;
        this.questionnaire = Object.assign(new Questionnaire({}), responseDto.item!)
      });
  
    }
    
  }
}

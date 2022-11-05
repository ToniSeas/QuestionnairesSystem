import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-create-step-five',
  templateUrl: './create-step-five.component.html',
  styleUrls: ['./create-step-five.component.css']
})
export class CreateStepFiveComponent implements OnInit {
  @Input() stepperContainer?: MatStepper;
  @Input() questionnaire?: Questionnaire;

  public messageToShow: string;
  public isSendSuccessfull: boolean;

  constructor(public questionnaireService: QuestionnaireService) { 
    this.messageToShow = "";
    this.isSendSuccessfull = false;
  }

  ngOnInit(): void {
  }

  public sendQuestionnaire() {
    this.questionnaireService.createQuestionnaire(this.questionnaire!).subscribe((messageDTO) => {
      if (messageDTO.id == 0) {
        this.isSendSuccessfull = false;
        this.messageToShow = "No se pudo enviar el cuestionario"
      } else if (messageDTO.id == 1) {
        this.isSendSuccessfull = true;
        this.messageToShow = "Cuestionario Enviado"
      }
    });
  }

}

import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { QuestionUtil } from 'src/app/util/QuestionUtil';

@Component({
  selector: 'app-create-step-five',
  templateUrl: './create-step-five.component.html',
  styleUrls: ['./create-step-five.component.css']
})
export class CreateStepFiveComponent implements OnInit, OnChanges {
  @Input() isModify?: boolean;
  @Input() stepperContainer?: MatStepper;
  @Input() questionnaire?: Questionnaire;

  public messageToShow: string;
  public isSendSuccessfull: boolean;
  public sharedUrl: string;
  public isUrlCopied: boolean;

  constructor(public questionnaireService: QuestionnaireService) {
    this.messageToShow = "";
    this.isSendSuccessfull = false;
    this.sharedUrl = "";
    this.isUrlCopied = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    let isModifyAux: boolean = changes['isModify'].currentValue;
    if(isModifyAux){
      this.sharedUrl = "";
        var hostDomain = `${window.location.protocol}//${window.location.host}`;
        this.sharedUrl = `${hostDomain}/link/${this.questionnaire?.id}`
    }
  }

  ngOnInit(): void {
  }

  public copyUrl(): void {
    this.isUrlCopied = true;
  }

  public sendQuestionnaire() {
    //limpiar las preguntas para asegurarse que no contengan respuestas u opciones inválidas.
    this.questionnaire?.questions.forEach(question => {
      QuestionUtil.cleanQuestion(question)
    });


    this.questionnaireService.createQuestionnaire(this.questionnaire!).subscribe((responseDTO) => {
      if (responseDTO.id == 1) {
        this.isSendSuccessfull = true;
        this.messageToShow = "Cuestionario Enviado";
        this.sharedUrl = "";
        var hostDomain = `${window.location.protocol}//${window.location.host}`;
        this.sharedUrl = `${hostDomain}/link/${responseDTO.item}`
      } else {
        this.isSendSuccessfull = false;
        this.messageToShow = "No se pudo enviar el cuestionario"
      }
    });

    //repoblar las opciones de las preguntas que las necesiten para que el usuario pueda observarlas en la vista previa
    
    //limpiar las preguntas para asegurarse que no contengan respuestas u opciones inválidas.
    this.questionnaire?.questions.forEach(question => {
      QuestionUtil.autoLoadPredefinedOptions(question)
    });
  }

  public modifyQuestionnaire() {
    this.questionnaireService.updateQuestionnaire(this.questionnaire!).subscribe((responseDTO) => {
      if (responseDTO.id == 1) {
        this.isSendSuccessfull = true;
        this.messageToShow = "Cuestionario modificado";
      } else {
        this.isSendSuccessfull = false;
        this.messageToShow = "No se pudo modificar el cuestionario";
      }
    });
  }

}

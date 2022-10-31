import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { Questionnaire } from 'src/app/models/Questionnaire';

@Component({
  selector: 'app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.css']
})
export class QuestionnaireViewComponent implements OnInit {


  /*
      public static readonly UNIQUE_SELECTION:string = "Selección Única";
    public static readonly MULTIPLE_SELECTION:string = "Selección Múltiple";
    public static readonly SCALE:string = "Escala";
    public static readonly NUMERIC:string = "Numérica";
    public static readonly TRUE_FALSE:string = "Verdadero o Falso";
    public static readonly OPENED:string = "Abierta";
   */

  questionnaire?: Questionnaire

  constructor() {
    this.questionnaire = new Questionnaire({})
    this.questionnaire.id = 0;
    this.questionnaire.description = "Este es el cuestionario de pruebas utilizado durante el desarrollo del sistema de cuestionarios."
    this.questionnaire.name = "Cuestionario de pruebas"
  }

  ngOnInit(): void {
  }

}

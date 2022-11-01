import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { single } from 'rxjs';
import { Option } from 'src/app/models/Option';
import { Question } from 'src/app/models/Question';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { LongAnswerQuestionComponent } from './long-answer-question/long-answer-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { ScaleQuestionComponent } from './scale-question/scale-question.component';
import { SingleChoiceQuestionComponent } from './single-choice-question/single-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';

@Component({
  selector: 'app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.css']
})
export class QuestionnaireViewComponent implements OnInit {


  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  questionnaire?: Questionnaire

  constructor() {

    this.questionnaire = new Questionnaire({})
    this.questionnaire.id = 0;
    this.questionnaire.description = "Este es el cuestionario de pruebas utilizado durante el desarrollo del sistema de cuestionarios."
    this.questionnaire.name = "Cuestionario de pruebas"
    let number = 0
    let question
    
    //selección única
    question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
    question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
    question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
    question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
    question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
    this.questionnaire.questions.push(question)
    number++

    //Respuesta larga
    question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
    this.questionnaire.questions.push(question)
    number++

    //verdadero o falseo
    question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
    question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
    question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
    this.questionnaire.questions.push(question)
    number++

    //escala
    question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
    question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
    question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
    question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
    question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
    question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
    this.questionnaire.questions.push(question)
    number++

    //numérica
    question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
    this.questionnaire.questions.push(question)
    number++

    //---------------------------------------------------------------------------------
        //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++    //selección única
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'su' })
        question.options.push(new Option({ id: 1, optionName: 'opcion A', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 2, optionName: 'opcion B', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 3, optionName: 'opcion C', idQuestion: number, idQuestionType: 'su' }))
        question.options.push(new Option({ id: 4, optionName: 'opcion D', idQuestion: number, idQuestionType: 'su' }))
        this.questionnaire.questions.push(question)
        number++
    
        //Respuesta larga
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'rl' })
        this.questionnaire.questions.push(question)
        number++
    
        //verdadero o falseo
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'vf' })
        question.options.push(new Option({ id: 1, optionName: 'Verdadero', idQuestion: number, idQuestionType: 'vf' }))
        question.options.push(new Option({ id: 2, optionName: 'Falso', idQuestion: number, idQuestionType: 'vf' }))
        this.questionnaire.questions.push(question)
        number++
    
        //escala
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'es' })
        question.options.push(new Option({ id: 1, optionName: 'Muy malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 2, optionName: 'Malo', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 3, optionName: 'Regular', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Bueno', idQuestion: number, idQuestionType: 'es' }))
        question.options.push(new Option({ id: 4, optionName: 'Muy Bueno', idQuestion: number, idQuestionType: 'es' }))
        this.questionnaire.questions.push(question)
        number++
    
        //numérica
        question = new Question({ categoryId: -1, id: number, isOptional: false, position: this.randomNumber(0, 1000000), statement: `Pregunta ${number}`, typeId: 'nu' })
        this.questionnaire.questions.push(question)
        number++

    this.questionnaire.sortQuestions()
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.questionnaire?.questions.forEach(element => {
      this.loadQuestion(element)
    });
  }


  loadQuestion(question: Question): void {
    switch (question.typeId) {
      case 'su':
        const singleChoiceQuestionComponentRef = this.container.createComponent(SingleChoiceQuestionComponent)
        singleChoiceQuestionComponentRef.instance.question = question
        singleChoiceQuestionComponentRef.changeDetectorRef.detectChanges()
        break;
      case 'sm':
        const multipleChoiceQuestionComponentRef = this.container.createComponent(MultipleChoiceQuestionComponent)
        multipleChoiceQuestionComponentRef.instance.question = question
        multipleChoiceQuestionComponentRef.changeDetectorRef.detectChanges()
        break;
      case 'rl':
        const longAnswerQuestionComponentRef = this.container.createComponent(LongAnswerQuestionComponent)
        longAnswerQuestionComponentRef.instance.question = question
        longAnswerQuestionComponentRef.changeDetectorRef.detectChanges()
        break;
      case 'vf':
        const trueFalseQuestionComponentRef = this.container.createComponent(TrueFalseQuestionComponent)
        trueFalseQuestionComponentRef.instance.question = question
        trueFalseQuestionComponentRef.changeDetectorRef.detectChanges()
        break;
      case 'es':
        const scaleQuestionComponent = this.container.createComponent(ScaleQuestionComponent)
        scaleQuestionComponent.instance.question = question
        scaleQuestionComponent.changeDetectorRef.detectChanges()
        break;
    }
  }

 randomNumber (min: number, max: number): number {
    let localMin: number = Math.ceil(min);
    let localMax: number = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


}

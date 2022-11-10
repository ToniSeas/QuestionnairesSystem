import { ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { single } from 'rxjs';
import { Answer } from 'src/app/models/Answer';
import { Option } from 'src/app/models/Option';
import { Question } from 'src/app/models/Question';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { QuestionUtil } from 'src/app/util/QuestionUtil';
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
  questionComponentRefs: ComponentRef<any>[] = []
  isSendSuccessfull: boolean = true
  public messageToShow: string = "";

 
  constructor(private questionnaireService: QuestionnaireService, private router: Router) {

    this.questionnaire = new Questionnaire({})
  }


  ngOnInit(): void {
    let url = this.router.url.replace("/questionnaire-view/", "")

    this.questionnaireService.getQuestionnaireById((Number)(url)).subscribe(
      (responseDTO) => {
        this.questionnaire = Object.assign(new Questionnaire({}), responseDTO.item!)
        this.questionnaire.sortQuestions()
        this.questionnaire?.questions.forEach(element => {
          this.loadQuestion(element)
        });
      }
    )
  }

  loadQuestion(question: Question): void {
    question.answers = []
    question.answers.push(new Answer())

    switch (question.typeId) {
      case 'su':
        const singleChoiceQuestionComponentRef = this.container.createComponent(SingleChoiceQuestionComponent)
        singleChoiceQuestionComponentRef.instance.question = question
        singleChoiceQuestionComponentRef.changeDetectorRef.detectChanges()
        this.questionComponentRefs.push(singleChoiceQuestionComponentRef)
        break;
      case 'sm':
        const multipleChoiceQuestionComponentRef = this.container.createComponent(MultipleChoiceQuestionComponent)
        multipleChoiceQuestionComponentRef.instance.question = question
        multipleChoiceQuestionComponentRef.changeDetectorRef.detectChanges()
        this.questionComponentRefs.push(multipleChoiceQuestionComponentRef)
        break;
      case 'rl':
        const longAnswerQuestionComponentRef = this.container.createComponent(LongAnswerQuestionComponent)
        longAnswerQuestionComponentRef.instance.question = question
        longAnswerQuestionComponentRef.changeDetectorRef.detectChanges()
        this.questionComponentRefs.push(longAnswerQuestionComponentRef)
        break;
      case 'vf':
        const trueFalseQuestionComponentRef = this.container.createComponent(TrueFalseQuestionComponent)
        trueFalseQuestionComponentRef.instance.question = question
        trueFalseQuestionComponentRef.changeDetectorRef.detectChanges()
        this.questionComponentRefs.push(trueFalseQuestionComponentRef)
        break;
      case 'es':
        const scaleQuestionComponent = this.container.createComponent(ScaleQuestionComponent)
        scaleQuestionComponent.instance.question = question
        scaleQuestionComponent.changeDetectorRef.detectChanges()
        this.questionComponentRefs.push(scaleQuestionComponent)
        break;
    }
  }

  areAllRequiredQuestionsAnswered(): boolean {
    let allQuestionsAnswered = true
    this.questionnaire?.questions.forEach(element => {
      if (!QuestionUtil.validateAnsweredQuestion(element)) {
        allQuestionsAnswered = false;
      }
    });
    return allQuestionsAnswered
  }

  sendAnswers(): void {
    this.questionnaireService.commitAnswers(this.questionnaire!).subscribe((messageDTO) => {
      if (messageDTO.id == 0) {
        this.isSendSuccessfull = false;
        this.messageToShow = "No se pudo enviar el cuestionario"
      } else if (messageDTO.id == 1) {
        this.router.navigate(['/questionnaire-answered/'])
      }
    });
  }
}

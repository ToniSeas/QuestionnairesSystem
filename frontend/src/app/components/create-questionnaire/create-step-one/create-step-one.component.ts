import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireType } from 'src/app/models/QuestionnaireType';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-create-step-one',
  templateUrl: './create-step-one.component.html',
  styleUrls: ['./create-step-one.component.css']
})
export class CreateStepOneComponent implements OnInit, OnChanges {
  @Input() stepperContainer?: MatStepper;
  @Input() questionnaire?: Questionnaire;

  private createStepOneComponentForm!: FormGroup;
  public questionnaireTypes: Observable<QuestionnaireType[]>;

  constructor(public questionnaireService: QuestionnaireService, private router: Router) { 
    this.questionnaire = new Questionnaire({ });
    this.questionnaireTypes = new Observable<QuestionnaireType[]>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillControl(changes['questionnaire'].currentValue)
  }

  public fillControl (questionnaire : Questionnaire){
    this.createStepOneComponentForm = new FormGroup({
      questionnaireName: new FormControl(questionnaire.name, [Validators.required]),
      questionnaireState: new FormControl(questionnaire.isActive,[Validators.required]),
      questionnaireDescription: new FormControl(questionnaire.description,[Validators.required]),
      questionnaireDate: new FormControl(questionnaire.expirationDate?.toString().split('T')[0],[Validators.required]),
      questionnaireType: new FormControl(questionnaire.idQuestionnaireType,[Validators.required])
    })
  }

  //version estable
  // ngOnInit(): void {
  //   let idQuestionnaire = Number(this.router.url.replace("/modify-questionnaire/", ""))
  //   this.createStepOneComponentForm = new FormGroup({
  //     questionnaireName: new FormControl("", [Validators.required]),
  //     questionnaireState: new FormControl("",[Validators.required]),
  //     questionnaireDescription: new FormControl("",[Validators.required]),
  //     questionnaireDate: new FormControl("",[Validators.required]),
  //     questionnaireType: new FormControl("",[Validators.required])
  //   })
  //   if (!isNaN(idQuestionnaire)) {
  //     console.log(idQuestionnaire)
  //     this.questionnaireService.getQuestionnaireById(idQuestionnaire).subscribe((responseDto) => {
  //       this.questionnaire = Object.assign(new Questionnaire({}), responseDto.item!)
  //       this.createStepOneComponentForm = new FormGroup({
  //         questionnaireName: new FormControl(this.questionnaire.name, [Validators.required]),
  //         questionnaireState: new FormControl(this.questionnaire.isActive,[Validators.required]),
  //         questionnaireDescription: new FormControl(this.questionnaire.description,[Validators.required]),
  //         questionnaireDate: new FormControl(this.questionnaire.expirationDate?.toString().split('T')[0],[Validators.required]),
  //         questionnaireType: new FormControl(this.questionnaire.idQuestionnaireType,[Validators.required])
  //       })
  //     });
     
  //   } 

  //   this.questionnaireService.getQuestionnaireTypes().subscribe(
  //     (responseDto) => this.questionnaireTypes = of(responseDto.item!)
  //   );
  // }

  ngOnInit(): void {
   

    this.questionnaireService.getQuestionnaireTypes().subscribe(
      (responseDto) => this.questionnaireTypes = of(responseDto.item!)
    );
  }

  public getFormGroup(): FormGroup { return this.createStepOneComponentForm; }

  public fillInputs() {
    this.questionnaire!.name = this.createStepOneComponentForm.get('questionnaireName')?.value;
    this.questionnaire!.idQuestionnaireType = this.createStepOneComponentForm.get('questionnaireType')?.value;
    this.questionnaire!.expirationDate = this.createStepOneComponentForm.get('questionnaireDate')?.value;
    this.questionnaire!.description = this.createStepOneComponentForm.get('questionnaireDescription')?.value;
    this.questionnaire!.isActive = this.createStepOneComponentForm.get('questionnaireState')?.value;
  }

  onSubmit = () => {
    if (this.createStepOneComponentForm.invalid) {
      console.log('Formulario invalido paso 1 crear cuestionario')
    } else {
      this.fillInputs();
      this.goForward();
    }
  }

  goBack(){
    this.stepperContainer!.previous();
  }

  goForward(){
    this.stepperContainer!.next();
  }

  /*
  public createQuestionnaire(nameQ: string, typeQ: string, dateQ: Date, descriptionQ: string, stateQ: string): void {
    this.questionnaire = new Questionnaire({type: typeQ, name: nameQ, date: dateQ, description: descriptionQ, state: stateQ});
  }
  */

}

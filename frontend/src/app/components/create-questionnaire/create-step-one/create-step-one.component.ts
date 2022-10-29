import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Observable, of } from 'rxjs';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireType } from 'src/app/models/QuestionnaireType';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-create-step-one',
  templateUrl: './create-step-one.component.html',
  styleUrls: ['./create-step-one.component.css']
})
export class CreateStepOneComponent implements OnInit {
  @Input() stepperContainer?: MatStepper;
  @Input() questionnaire?: Questionnaire;

  private createStepOneComponentForm!: FormGroup;
  public questionnaireTypes: Observable<QuestionnaireType[]>;

  constructor(public questionnaireService: QuestionnaireService) { 
    this.questionnaire = new Questionnaire({ });
    this.questionnaireTypes = new Observable<QuestionnaireType[]>();
  }

  ngOnInit(): void {

    this.createStepOneComponentForm = new FormGroup({
      questionnaireName: new FormControl("", [Validators.required]),
      questionnaireState: new FormControl("",[Validators.required]),
      questionnaireDescription: new FormControl("",[Validators.required]),
      questionnaireDate: new FormControl("",[Validators.required]),
      questionnaireType: new FormControl("",[Validators.required])
    })

    this.questionnaireService.getQuestionnaireTypes().subscribe(
      (questionnaireTypes) => this.questionnaireTypes = of(questionnaireTypes)
    );
  }

  public getFormGroup(): FormGroup { return this.createStepOneComponentForm; }

  onSubmit = () => {
    if (this.createStepOneComponentForm.invalid) {
      console.log('test')
    } else {
      console.log(this.questionnaire)
      this.questionnaire!.name = this.createStepOneComponentForm.get('questionnaireName')?.value;
      this.questionnaire!.typeId = this.createStepOneComponentForm.get('questionnaireType')?.value;
      this.questionnaire!.date = this.createStepOneComponentForm.get('questionnaireDate')?.value;
      this.questionnaire!.description = this.createStepOneComponentForm.get('questionnaireDescription')?.value;
      this.questionnaire!.isActive = this.createStepOneComponentForm.get('questionnaireState')?.value;
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

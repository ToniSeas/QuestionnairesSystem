import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-step-one',
  templateUrl: './create-step-one.component.html',
  styleUrls: ['./create-step-one.component.css']
})
export class CreateStepOneComponent implements OnInit {

  private createStepOneComponentForm!: FormGroup;


  public questionnaire!: Questionnaire;

  constructor() { }
  public getFormGroup(): FormGroup { return this.createStepOneComponentForm; }


  ngOnInit(): void {

    this.createStepOneComponentForm = new FormGroup({
      questionnaireName: new FormControl("", [Validators.required]),
      questionnaireState: new FormControl("",[Validators.required]),
      questionnaireDescription: new FormControl("",[Validators.required]),
      questionnaireDate: new FormControl("",[Validators.required]),
      questionnaireType: new FormControl("",[Validators.required])
    })

  }

  onSubmit = () => {
    if (this.createStepOneComponentForm.invalid) {
      console.log('test')
    } else {
      console.log('válido');
      let nameQ= this.createStepOneComponentForm.get('questionnaireName')?.value;
      let typeQ= this.createStepOneComponentForm.get('questionnaireType')?.value;
      let dateQ= this.createStepOneComponentForm.get('questionnaireDate')?.value;
      let descriptionQ= this.createStepOneComponentForm.get('questionnaireDescription')?.value;
      let stateQ= this.createStepOneComponentForm.get('questionnaireState')?.value;
      this.createQuestionnaire(nameQ, typeQ, dateQ, descriptionQ, stateQ);
      this.createStepOneComponentForm.reset();
    }
  }

  public createQuestionnaire(nameQ: string, typeQ: string, dateQ: Date, descriptionQ: string, stateQ: string): void {
    this.questionnaire = new Questionnaire({type: typeQ, name: nameQ, date: dateQ, description: descriptionQ, state: stateQ});
  }

}

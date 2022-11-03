import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  question!: Question

  optionsFormGroup!: FormGroup

  constructor(changeDetector: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.optionsFormGroup = this.formBuilder.group(
      {
        optionsFormControl: this.formBuilder.array ([], [Validators.required])   
      }
    )
  }

  ngOnInit(): void {
  }

  onChange(id: number): void {
    this.question.options.forEach(element => {
      if (element.id == id) {
        element.selected = !element.selected
      }
    });
  }


  validateSelection(): boolean {
    if (this.question.isOptional) {
      return true
    }

    let valid = false
    this.question.options.forEach(element => {
      if (element.selected) {
        valid = true
      }
    });

    return !valid
  }



}

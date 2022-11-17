import { ThisReceiver } from '@angular/compiler';
import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireViewComponent } from '../../questionnaire-view/questionnaire-view.component';

@Component({
  selector: 'app-create-step-four',
  templateUrl: './create-step-four.component.html',
  styleUrls: ['./create-step-four.component.css']
})
export class CreateStepFourComponent implements OnInit {
  @Input() questionnaire?: Questionnaire;
  @Input() stepperContainer?: MatStepper;


  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private questionnaireViewRef?: ComponentRef<QuestionnaireViewComponent>;
  
  constructor() {

   }

  ngOnInit(): void {
    this.stepperContainer?.selectionChange.subscribe((index: number) => {
      this.updateView()
    });
  }

  ngAfterViewInit() {
    this.questionnaireViewRef = this.container.createComponent(QuestionnaireViewComponent);
    this.questionnaireViewRef.instance.questionnaire = this.questionnaire;
    this.questionnaireViewRef.instance.isPreview = true;
    this.questionnaireViewRef.changeDetectorRef.detectChanges();
    this.updateView();
  }
  
  goBack(){
    this.stepperContainer!.previous();
  }

  goForward(){
    this.stepperContainer!.next();
  }

  /**
   * Este método se llama automáticamente cada vez que el stepper se mueve a otra vista para mantener
   * la lista de preguntas actualizada.
   */
  updateView() {
    this.questionnaireViewRef!.instance.autoLoadQuestion()
    this.questionnaireViewRef!.changeDetectorRef.detectChanges();
  }
}

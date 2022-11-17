import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/body/main-menu/main-menu.component';
import { NavbarComponent } from './components/body/navbar/navbar.component';
import { QuestionnaireMenuComponent } from './components/questionnaire-menu/questionnaire-menu.component';
import { MaintenanceMenuComponent } from './components/maintenance-menu/maintenance-menu.component';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { CreateStepOneComponent } from './components/create-questionnaire/create-step-one/create-step-one.component';
import { SearchQuestionnaireComponent } from './components/search-questionnaire/search-questionnaire.component';
import { QuestionnaireResultsComponent } from './components/questionnaire-results/questionnaire-results.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SelectOfficeComponent } from './components/login/select-office/select-office.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageSubcategoryComponent } from './components/manage-subcategory/manage-subcategory.component';
import { CreateQuestionDialog, CreateStepTwoComponent } from './components/create-questionnaire/create-step-two/create-step-two.component';
import { CreateStepThreeComponent } from './components/create-questionnaire/create-step-three/create-step-three.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireViewComponent } from './components/questionnaire-view/questionnaire-view.component';
import { MultipleChoiceQuestionComponent } from './components/questionnaire-view/multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './components/questionnaire-view/true-false-question/true-false-question.component';
import { LongAnswerQuestionComponent } from './components/questionnaire-view/long-answer-question/long-answer-question.component';
import { ScaleQuestionComponent } from './components/questionnaire-view/scale-question/scale-question.component';
import { SingleChoiceQuestionComponent } from './components/questionnaire-view/single-choice-question/single-choice-question.component';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedRouterComponent } from './components/shared-router/shared-router.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CreateStepFiveComponent } from './components/create-questionnaire/create-step-five/create-step-five.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { QuestionnaireAnsweredComponent } from './components/questionnaire-answered/questionnaire-answered.component';
import {MatCardModule} from '@angular/material/card';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { NumericQuestionComponent } from './components/questionnaire-view/numeric-question/numeric-question.component';
import { CreateStepFourComponent } from './components/create-questionnaire/create-step-four/create-step-four.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginComponent,
    MainMenuComponent,
    NavbarComponent,
    QuestionnaireMenuComponent,
    MaintenanceMenuComponent,
    CreateQuestionnaireComponent,
    CreateStepOneComponent,
    SearchQuestionnaireComponent,
    QuestionnaireResultsComponent,
    ManageCategoryComponent,
    NotFoundPageComponent,
    SelectOfficeComponent,
    ManageSubcategoryComponent,
    CreateStepTwoComponent,
    CreateStepThreeComponent,
    CreateQuestionDialog,
    QuestionnaireViewComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
    LongAnswerQuestionComponent,
    ScaleQuestionComponent,
    SingleChoiceQuestionComponent,
    SharedRouterComponent,
    CreateStepFiveComponent,
    QuestionnaireAnsweredComponent,
    NumericQuestionComponent,
    CreateStepFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    DragDropModule,
    CdkTableModule,
    MatCardModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

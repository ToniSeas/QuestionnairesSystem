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
    QuestionnaireResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

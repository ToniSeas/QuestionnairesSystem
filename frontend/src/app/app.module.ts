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
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SelectOfficeComponent } from './components/login/select-office/select-office.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageSubcategoryComponent } from './components/manage-subcategory/manage-subcategory.component';
import { CreateStepThreeComponent } from './components/create-questionnaire/create-step-three/create-step-three.component';

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
    CreateStepThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

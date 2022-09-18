import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionnaireMenuComponent } from './components/questionnaire-menu/questionnaire-menu.component';
import { MaintenanceMenuComponent } from './components/maintenance-menu/maintenance-menu.component'; 

const routes: Routes = [
  { path: 'body', component: BodyComponent }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'questionnaire-menu', component: QuestionnaireMenuComponent}
  ,{ path: 'maintenance-menu', component: MaintenanceMenuComponent}
  //{ path: '**', component: componente para página no encontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

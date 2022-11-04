import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionnaireMenuComponent } from './components/questionnaire-menu/questionnaire-menu.component';
import { MaintenanceMenuComponent } from './components/maintenance-menu/maintenance-menu.component'; 
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SelectOfficeComponent } from './components/login/select-office/select-office.component';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { SearchQuestionnaireComponent } from './components/search-questionnaire/search-questionnaire.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ManageSubcategoryComponent } from './components/manage-subcategory/manage-subcategory.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ["ADMIN", "SADMIN", "REVIEWER"]
    },
    children: [
      { path: 'questionnaire-menu', 
        component: QuestionnaireMenuComponent,
        canActivate: [AuthGuard],
        data: {
          roles: ["ADMIN", "SADMIN", "REVIEWER"]
        },
      }
      , { path: 'maintenance-menu', 
          component: MaintenanceMenuComponent,
          canActivate: [AuthGuard],
          data: {
            roles: ["ADMIN", "SADMIN", "REVIEWER"]
          },
        }
      , { path: 'create-questionnaire', 
          component: CreateQuestionnaireComponent,
          canActivate: [AuthGuard],
          data: {
            roles: ["ADMIN", "SADMIN", "REVIEWER"]
          },
        }
      , { path: 'search-questionnaire', 
          component: SearchQuestionnaireComponent,
          canActivate: [AuthGuard],
          data: {
            roles: ["ADMIN", "SADMIN", "REVIEWER"]
          },
        }
      , { path: 'manage-category', 
          component: ManageCategoryComponent,
          canActivate: [AuthGuard],
          data: {
            roles: ["ADMIN", "SADMIN", "REVIEWER"]
          },
        }
      , { path: 'manage-subcategory', 
          component: ManageSubcategoryComponent,
          canActivate: [AuthGuard],
          data: {
            roles: ["ADMIN", "SADMIN", "REVIEWER"]
          },
        }
    ]
  }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'office', 
      component: SelectOfficeComponent,
      canActivate: [AuthGuard],
      data: {
        roles: ["ADMIN", "SADMIN", "REVIEWER"]
      },
    }
  ,{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

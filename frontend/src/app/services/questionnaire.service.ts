import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageDTO } from '../models/DataTranferObjects/MessageDTO';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { Questionnaire } from '../models/Questionnaire';
import { QuestionnaireType } from '../models/QuestionnaireType';
import { QuestionType } from '../models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  dateAux: Date = new Date();

  private controllerURL: string;
  constructor(private httpClient: HttpClient) { 
    this.controllerURL = "Questionnaire";
  }

  public getQuestionnaire() : Observable<ResponseDTO<Questionnaire[]>> {
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<ResponseDTO<Questionnaire[]>>(`${environment.apiUrl}/${this.controllerURL}/GetQuestionnaires`);
  }

  public createQuestionnaire(questionnaire: Questionnaire) : Observable<Questionnaire> {
    return this.httpClient.post<Questionnaire>(`${environment.apiUrl}/${this.controllerURL}/CreateQuestionnaire`, questionnaire);
  }

  public deleteQuestionnaire(id?: number) : Observable<MessageDTO> {
    return this.httpClient.delete<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/DeleteQuestionnaire/${id}`);
  }

  public getQuestionnaireTypes() : Observable<QuestionnaireType[]> {
    var types: QuestionnaireType[] = [];
    types.push(new QuestionnaireType({id:1, name:"Interno"}))
    types.push(new QuestionnaireType({id:2, name:"Externo"}))
    types.push(new QuestionnaireType({id:3, name:"Impersonal"}))

    return of(types);
  }

}

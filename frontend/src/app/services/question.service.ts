import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { Option } from '../models/Option';
import { Question } from '../models/Question';
import { QuestionType } from '../models/QuestionType';
import { QuestionUtil } from '../util/QuestionUtil';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionList: Question[] = []
  private controllerURL: string;
  constructor(private httpClient: HttpClient) {
    this.controllerURL = "Question";
  }

  //Obtener preguntas con respuesta
  public getQuestionWithAnswer(questionnaireId: number):Observable<ResponseDTO<Question[]>> {
    let params = new HttpParams().set('questionnaireId', questionnaireId);

    return this.httpClient.get<ResponseDTO<Question[]>>(`${environment.apiUrl}/${this.controllerURL}/GetQuestionWithAnswer`, { params: params });
  }

  // Obtener las preguntas
  public getQuestions(): Observable<Question[]> {
    var questions: Observable<Question[]> = of(this.questionList);
    return questions;
  }

  // Crear una pregunta
  public createQuestion(question: Question): Observable<Question[]> {
    this.questionList.push(question);
    var questions: Observable<Question[]> = of(this.questionList);
    return questions;
  }

  // Obtener los tipos de pregunta
  public getQuestionTypes(): Observable<ResponseDTO<QuestionType[]>> {
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<ResponseDTO<QuestionType[]>>(`${environment.apiUrl}/${this.controllerURL}/GetQuestionTypes`);
  }
  
}

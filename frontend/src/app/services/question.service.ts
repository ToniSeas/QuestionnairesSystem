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

  public getQuestionTypeById(idType: string): ResponseDTO<QuestionType> {
    // Configurar los parametros del get
    //let params = new HttpParams().set('idType', idType);
    // Lo que está dentro de los paréntesis es string interpolation
    //return this.httpClient.get<ResponseDTO<QuestionType>>(`${environment.apiUrl}/${this.controllerURL}/GetQuestionTypeById`, { params: params });


    // EL SUBCRIBE REALIZA LAS ACCIONES DESPUES DE QUE EJECUTE EL METODO, 
    // ENTONCES NO SE ASIGNAN LOS VALORES.
    // POR ESO DEJE ESTOS VALORES QUEMADOS

    var types: QuestionType[] = [
      new QuestionType({ id: 'su', name: "Selección Única" }),
      new QuestionType({ id: 'sm', name: "Selección Múltiple" }),
      new QuestionType({ id: 'es', name: "Escala" }),
      new QuestionType({ id: 'vf', name: "Verdadero o Falso" }),
      new QuestionType({ id: 'rl', name: "Abierta" }),
      new QuestionType({ id: 'nu', name: "Numérica" })
    ];

    var questionType;

    types.forEach(function (value) {
      if (value.id == idType) {
        questionType = value;
      }
    });

    return new ResponseDTO<QuestionType>({item:questionType});
  }

  public getOptions(id: number): Observable<Option[]> {
    var auxOptios: Option[] = [
      new Option({ id: 1, optionName: 'Bueno' }),
      new Option({ id: 2, optionName: 'Muy Bueno' }),
      new Option({ id: 3, optionName: 'Super Bueno' }),
      new Option({ id: 4, optionName: 'Malo' }),
      new Option({ id: 5, optionName: 'Malisimo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' }),
      new Option({ id: 6, optionName: 'Extramalo' })
    ]

    var options: Observable<Option[]> = of(auxOptios);
    return options;
  }

}

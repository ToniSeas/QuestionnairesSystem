import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Option } from '../models/Option';
import { Question } from '../models/Question';
import { QuestionType } from '../models/QuestionType';
import { QuestionUtil } from '../util/QuestionUtil';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  su = new QuestionType({ id: 1,name: "Selección Única" });
  sm = new QuestionType({ id: 2,name: "Selección Múltiple" });
  e = new QuestionType({ name: "Escala" });
  vf = new QuestionType({ name: "Verdadero o Falso" });
  a = new QuestionType({ name: "Abierta" });
  n = new QuestionType({ name: "Numérica" });
  questionList: Question[] = [new Question({ id: 1, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.su.id })
    , new Question({ id: 2, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.sm.id })
    , new Question({ id: 3, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.a.id })
    , new Question({ id: 4, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.e.id })
    , new Question({ id: 5, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.n.id })
    , new Question({ id: 6, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.vf.id })
    , new Question({ id: 7, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.n.id })
    , new Question({ id: 34, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.a.id })
    , new Question({ id: 2, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.e.id })
    , new Question({ id: 12, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.sm.id })
    , new Question({ id: 32, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.vf.id })
    , new Question({ id: 14, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.su.id })
    , new Question({ id: 343, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.e.id })
    , new Question({ id: 523, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.su.id })
    , new Question({ id: 1231, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', typeId: this.a.id })];

  // Obtener los tipos de pregunta
  public getQuestionsTypes(): Observable<Question[]> {
    var questions: Observable<Question[]> = of(this.questionList);
    return questions;
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
  public getQuestionTypes(): Observable<QuestionType[]> {
    var questionTypesList: QuestionType[] = [
      new QuestionType({ id: 1, name: 'Selección Única', key: QuestionUtil.UNIQUE_SELECTION}),
      new QuestionType({ id: 2, name: 'Selección Múltiple', key: QuestionUtil.MULTIPLE_SELECTION}),
      new QuestionType({ id: 3, name: 'Verdadera o Falsa', key: QuestionUtil.TRUE_FALSE}),
      new QuestionType({ id: 4, name: 'Numérica', key: QuestionUtil.NUMERIC}),
      new QuestionType({ id: 5, name: 'Escala', key: QuestionUtil.SCALE}),
      new QuestionType({ id: 6, name: 'Abierta', key: QuestionUtil.OPENED})
    ]

    var questionTypes: Observable<QuestionType[]> = of(questionTypesList);
    return questionTypes;
  }

  public getQuestionTypeById(typeId: number): Observable<QuestionType> {
    var questionTypesList: QuestionType[] = [
      new QuestionType({ id: 1, name: 'Selección Única', key: QuestionUtil.UNIQUE_SELECTION}),
      new QuestionType({ id: 2, name: 'Selección Múltiple', key: QuestionUtil.MULTIPLE_SELECTION}),
      new QuestionType({ id: 3, name: 'Verdadera o Falsa', key: QuestionUtil.TRUE_FALSE}),
      new QuestionType({ id: 4, name: 'Numérica', key: QuestionUtil.NUMERIC}),
      new QuestionType({ id: 5, name: 'Escala', key: QuestionUtil.SCALE}),
      new QuestionType({ id: 6, name: 'Abierta', key: QuestionUtil.OPENED})
    ]

    var questionTypeAux = new QuestionType({})
    questionTypesList.forEach(function (questionType) {
      if (questionType.id == typeId) {
        questionTypeAux = questionType
      }
    });
    
    return of(questionTypeAux);
  }

  public getOptions(id: number): Observable<Option[]> {
    var auxOptios: Option[] = [
      new Option({ id: 1, option: 'Bueno' }),
      new Option({ id: 2, option: 'Muy Bueno' }),
      new Option({ id: 3, option: 'Super Bueno' }),
      new Option({ id: 4, option: 'Malo' }),
      new Option({ id: 5, option: 'Malisimo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' }),
      new Option({ id: 6, option: 'Extramalo' })
    ]

    var options: Observable<Option[]> = of(auxOptios);
    return options;
  }

}

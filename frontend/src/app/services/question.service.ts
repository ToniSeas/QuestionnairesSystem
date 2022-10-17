import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/Question';
import { QuestionType } from '../models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  su = new QuestionType({name: "Selección Única"});
  sm = new QuestionType({name: "Selección Múltiple"});
  e = new QuestionType({name: "Escala"});
  vf = new QuestionType({name: "Verdadero o Falso"});
  a = new QuestionType({name: "Abierta"});
  n = new QuestionType({name: "Numérica"});
  questionList: Question[] = [new Question({id: 1, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.su})
  , new Question({id: 2, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.sm})
  , new Question({id: 3, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.a})
  , new Question({id: 4, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.e})
  , new Question({id: 5, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.n})
  , new Question({id: 6, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.vf})
  , new Question({id: 7, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.n})
  , new Question({id: 34, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.a})
  , new Question({id: 2, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.e})
  , new Question({id: 12, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.sm})
  , new Question({id: 32, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.vf})
  , new Question({id: 14, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.su})
  , new Question({id: 343, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.e})
  , new Question({id: 523, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.su})
  , new Question({id: 1231, statement: 'aaaaaaaaaaaaaaaaaaaaaaaaaa?', type: this.a})];

  public getQuestionsTypes() : Observable<Question[]> {
  
    var questions : Observable<Question[]> = of(this.questionList);
    return questions;
  }

  public getQuestions() : Observable<Question[]> {
    var questions : Observable<Question[]> = of(this.questionList);
    return questions;
  }

  public createQuestion(question: Question) : Observable<Question[]> {
    
    this.questionList.push(question);
    var questions : Observable<Question[]> = of(this.questionList);
    return questions;
    
  }

  public getQuestionTypes() : Observable<QuestionType[]> {
    
    var questionTypesList: QuestionType[] = [
      new QuestionType({id: 1, name: 'Selección Única'}),
      new QuestionType({id: 2, name: 'Selección Múltiple'}),
      new QuestionType({id: 3, name: 'Verdadera o Falsa'}),
      new QuestionType({id: 4, name: 'Numérica'}),
      new QuestionType({id: 5, name: 'Escala'}),
      new QuestionType({id: 6, name: 'Abierta'})
    ]

    var questionTypes : Observable<QuestionType[]> = of(questionTypesList);
    return questionTypes;
    
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/Question';
import { QuestionType } from '../models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionList: Question[] = [new Question({enunciate:"quemada"})];

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

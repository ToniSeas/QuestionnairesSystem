import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionList: Question[] = [new Question({enunciate:"quemada"})];

  public getQuestions() : Observable<Question[]> {
  
    var questions : Observable<Question[]> = of(this.questionList);
    return questions;
  }

  public createQuestion(question: Question) : Observable<Question[]> {
    
    this.questionList.push(question);

    var questions : Observable<Question[]> = of(this.questionList);
    return questions;
  }

}

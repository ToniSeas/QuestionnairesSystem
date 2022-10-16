import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public createQuestion(question: Question) : Observable<Question[]> {
    console.log(question.id);

    var b:Question[];
    b = [new Question(), new Question()];
    var questions : Observable<Question[]> = of(b);
    return questions;
  }


}

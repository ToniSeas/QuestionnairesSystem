import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';
import { QuestionnaireType } from '../models/QuestionnaireType';
import { QuestionType } from '../models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  dateAux: Date = new Date();

  questionnaireList: Questionnaire[] = [ new Questionnaire({id: 1, typeId: "type1", name: "name1", date: this.dateAux, description: "description1", isActive: true}),
        new Questionnaire({id: 2, typeId: "type2", name: "name2", date: this.dateAux, description: "description2", isActive: true}),
        new Questionnaire({id: 3, typeId: "type3", name: "name3", date: this.dateAux, description: "description3", isActive: true}),
        new Questionnaire({id: 4, typeId: "type4", name: "name4", date: this.dateAux, description: "description4", isActive: true}),
        new Questionnaire({id: 5, typeId: "type5", name: "name5", date: this.dateAux, description: "description5", isActive: true}),
        new Questionnaire({id: 6, typeId: "type6", name: "name6", date: this.dateAux, description: "description6", isActive: true})];

  public getQuestionnaire() : Observable<Questionnaire[]> {

    var questionnaires : Observable<Questionnaire[]> = of(this.questionnaireList);
    return questionnaires;
    
  }

  /*
  public createQuestionnaire(questionnaire: Questionnaire) : Observable<Questionnaire[]> {
    
    this.categoryList.push(category);

    var categories : Observable<Category[]> = of(this.categoryList);
    return categories;
  }
  */

  public deleteQuestionnaire(id?: number) : Observable<Questionnaire[]> {

    this.questionnaireList.forEach( (item, index) => {
      if(item.id === id) this.questionnaireList.splice(index,1);
    });
    var questionnaires : Observable<Questionnaire[]> = of(this.questionnaireList);
    return questionnaires;
  }

  public getQuestionnaireTypes() : Observable<QuestionnaireType[]> {
    var types: QuestionnaireType[] = [];
    types.push(new QuestionnaireType({id:1, name:"Interno"}))
    types.push(new QuestionnaireType({id:2, name:"Externo"}))
    types.push(new QuestionnaireType({id:3, name:"Impersonal"}))

    return of(types);
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  dateAux: Date = new Date();

  questionnaireList: Questionnaire[] = [ new Questionnaire({id: 1,type: "type1", name: "name1", date: this.dateAux, description: "description1", state: "state1"}),
        new Questionnaire({id: 2,type: "type2", name: "name2", date: this.dateAux, description: "description2", state: "state2"}),
        new Questionnaire({id: 3,type: "type3", name: "name3", date: this.dateAux, description: "description3", state: "state3"}),
        new Questionnaire({id: 4,type: "type4", name: "name4", date: this.dateAux, description: "description4", state: "state4"}),
        new Questionnaire({id: 5,type: "type5", name: "name5", date: this.dateAux, description: "description5", state: "state5"}),
        new Questionnaire({id: 6,type: "type6", name: "name6", date: this.dateAux, description: "description6", state: "state6"})];

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

  

}

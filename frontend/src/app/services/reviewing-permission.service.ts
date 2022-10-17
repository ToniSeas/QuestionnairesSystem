import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';
import { Reviewer } from '../models/Reviewer';

@Injectable({
  providedIn: 'root'
})
export class ReviewingPermissionService {


  private urlController = "ReviewingPermission";

  declare reviewers: Reviewer[] //temporal

  constructor() {
    this.reviewers = []
  }

  //TODO this method should use QuestionnaireID to get the reviewers for that specific questionnaire
  public getReviewers(questionnaire?: Questionnaire): Observable<Reviewer[]> { //FOR NOW QUESTIONNAIRE IS NOT REQUIRED BUT IT SHOULD BE CHANGED
    if (questionnaire != null) {
      /*
          TODO call api using: 
          return this.http.get<Questionnaire[]>(`${environment.apiUrl}/${this.urlController}`);
          */
      var reviewers: Observable<Reviewer[]> = of(this.reviewers)
      console.log("NOT NULL MA' BROTHA")
      return reviewers; //Tempora
    } else {
      let r: Reviewer[] = []
      console.log("NULL MA' BROTHA")
      return of(r)
    }


  }

  public updateReviewer(reviewer: Reviewer): Observable<Reviewer[]> {
    //TODO call API

    //temporal:
    this.reviewers.forEach(element => {
      if (element.id == reviewer.id) {
        element.idOffice = reviewer.idOffice
        element.idQuestionnaire = reviewer.idQuestionnaire
        element.lastname = reviewer.lastname
        element.name = reviewer.name
      }
    });

    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Temporal
  }

  public addReviewer(userId: number): Observable<Reviewer[]> {
    //TODO call API
    this.reviewers.push(new Reviewer({id: userId}))
    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Temporal
  }

  public deleteReviewer(reviewer: Reviewer): Observable<Reviewer[]> {
    //TODO call API
    let index = this.reviewers.indexOf(reviewer, 0)
    if (index > -1) {
      this.reviewers.splice(index, 1)
    }
    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Temporal
  }

  public clearReviewers(): Observable<Reviewer[]> {
    this.reviewers = []
    return of(this.reviewers)
  }
}

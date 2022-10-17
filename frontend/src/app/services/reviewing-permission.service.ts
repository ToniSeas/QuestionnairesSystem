import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';
import { Reviewer } from '../models/Reviewer';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReviewingPermissionService {


  private urlController = "ReviewingPermission";

  reviewers: Reviewer[]
 
  constructor() {
    this.reviewers = []

  }

  /**
   * 
   * @param questionnaire this questionnaire is used to filter which users to return. If it's not supplied, then an empty list is returned.
   * @returns List of questio
   */
  public getReviewers(questionnaire?: Questionnaire): Observable<Reviewer[]> {
    if (questionnaire != null) {
      /*
          TODO call api using: 
          return this.http.get<Questionnaire[]>(`${environment.apiUrl}/${this.urlController}`);
          */
      var reviewers: Observable<Reviewer[]> = of(this.reviewers)
      return reviewers; //Tempora
    } else {
      let r: Reviewer[] = []
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

  public addReviewer(reviewer: Reviewer): Observable<Reviewer[]> {
    //Check if reviewe is already on list

    let exist = false

    this.reviewers.forEach(element => {
      if (element.id == reviewer.id) {
        exist = true
      }
    })

    //TODO call API
    if (!exist) {
      this.reviewers.push(reviewer)
    }
    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Temporal
  }

  public removeReviewer(id: number): Observable<Reviewer[]> {
    //TODO call API

    let reviewer: Reviewer
    reviewer = new Reviewer({})
    let found = false

    //fin the reviewer and then delete it
    this.reviewers.forEach(element => {
      if (element.id == id) {
        reviewer = element
        found = true
      }
    })

    if (found) {
      let index = this.reviewers.indexOf(reviewer, 0)
      if (index > -1) {
        this.reviewers.splice(index, 1)
      }
    }
    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Temporal
  }

  public clearReviewers(): Observable<Reviewer[]> {
    this.reviewers = []
    return of(this.reviewers)
  }
}

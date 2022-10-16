import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) {
  }


  public getReviewers(questionnaire: Questionnaire): Observable<Reviewer[]> {
    /*
    TODO call api using: 
    return this.http.get<Questionnaire[]>(`${environment.apiUrl}/${this.urlController}`);
    */
    var reviewers: Observable<Reviewer[]> = of(this.reviewers);
    return reviewers; //Tempora
  }

  public updateReviewer(reviewer: Reviewer): void {
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
  }

  public addReviewer(reviewer: Reviewer): void {
    //TODO call API
    this.reviewers.push(reviewer)
  }

  public deleteReviewer(reviewer: Reviewer) {
    //TODO call API
    let index = this.reviewers.indexOf(reviewer, 0)
    if (index > -1) {
      this.reviewers.splice(index, 1)
    }
  }

  /*  public updateHero(hero: SuperHero) : Observable<SuperHero[]> {
      return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.urlController}`
              , hero);
    }
  
    public createHero(hero: SuperHero) : Observable<SuperHero[]> {
      return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.urlController}`
              , hero);
    }
  
    public deleteHero(hero: SuperHero) : Observable<SuperHero[]> {
      return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.urlController}/${hero.id}`);
    } 
  */

}

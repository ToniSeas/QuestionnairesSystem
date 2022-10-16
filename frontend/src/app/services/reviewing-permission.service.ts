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
  constructor(private http: HttpClient) { }

  public getRewiewers(questionnaire: Questionnaire) : Observable<Reviewer[]> {
    //return this.http.get<Questionnaire[]>(`${environment.apiUrl}/${this.urlController}`);
    var b:Reviewer[];
    b = [new Reviewer(), new Reviewer(), new Reviewer()];

    var reviewers : Observable<Reviewer[]> = of(b);
    return reviewers;
    //return lista de revisores quemada porque aún no tenemos api
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
  } */

}

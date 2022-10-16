import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewingPermissionService {

  private urlController = "ReviewingPermission";
  constructor(private http: HttpClient) { }

  public getRewiewers(questionnaire: Questionnaire) : Observable<Questionnaire[]> {
    //return this.http.get<Questionnaire[]>(`${environment.apiUrl}/${this.urlController}`);

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

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { User } from '../models/User';
import { UserToLogin } from '../models/UserToLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private controllerURL: string;

  constructor(private httpClient: HttpClient) { 
    this.controllerURL = "User";
  }

  public getUserByOffice(officeId: number): Observable<ResponseDTO<User[]>> {
    let params = new HttpParams().set('officeId', officeId);
    return this.httpClient.get<ResponseDTO<User[]>>(`${environment.apiUrl}/${this.controllerURL}/GetUsersByOffice`, {params: params});
  }

  public logout() {
    this.setLoggedIn(false);
    this.setRole('');
    this.setUserId(-1);
    return of({ success: this.isLoggedIn, role: this.getRole() });
  }

  public login(user:UserToLogin): Observable<ResponseDTO<User>> {   
    return this.httpClient.post<ResponseDTO<User>>(`${environment.apiUrl}/${this.controllerURL}/Login`, user);
  }

  public getRole() {
    return localStorage.getItem('ROLE')!;
  }

  public setRole(userRole: string) {
    localStorage.setItem('ROLE', userRole);
  }

  public getUserId(): number {
    return parseInt(localStorage.getItem('userId')!);
  }

  public setUserId(userId: number) {
    localStorage.setItem('userId', `${userId}`);
  }

  public setLoggedIn(isLoggedIn:boolean) {
    if (isLoggedIn) {
      localStorage.setItem('STATE', 'true');
    } else {
      localStorage.setItem('STATE', 'false');
    }
  }

  public isLoggedIn():boolean {
    return (localStorage.getItem('STATE') == 'true');
  }

}

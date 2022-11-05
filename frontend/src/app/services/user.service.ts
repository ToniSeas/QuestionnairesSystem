import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageDTO } from '../models/DataTranferObjects/MessageDTO';
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

  users: User[] = [
    new User(
      {
        id: 1,
        name: "Jhon",
        idOffice: 1,
        lastname: "Smith"
      }),
    new User(
      {
        id: 2,
        idOffice: 2,
        name: "Sam",
        lastname: "W"
      }),
    new User(
      {
        id: 3,
        idOffice: 3,
        name: "Erick",
        lastname: "Smith"
      })]

  public getUserByOffice(officeId: number): Observable<User[]> {
    let userList: User[] = []

    this.users.forEach(element => {
      if (element.idOffice == officeId) {
        userList.push(element)
      }
    })
    return of(userList)
  }

  public logout() {
    this.setLoggedIn(false);
    this.setRole('');
    return of({ success: this.isLoggedIn, role: this.getRole() });
  }

  public login(user:UserToLogin): Observable<ResponseDTO<User>> {   
    return this.httpClient.post<ResponseDTO<User>>(`${environment.securityModuleUrl}/${this.controllerURL}/Login`, user);
  }

  public getRole() {
    return localStorage.getItem('ROLE')!;
  }

  public setRole(userRole: string) {
    localStorage.setItem('ROLE', userRole);
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

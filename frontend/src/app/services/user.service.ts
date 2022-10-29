import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { UserToLogin } from '../models/UserToLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenId: string;

  constructor(private cookies: CookieService) {
    this.tokenId = "token";
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

  // Los que tienen permisos de realizar cualquier acción en el sistema. 
  isSysAdmin() {
    return true;
  }

  // Los que tienen permisos de crud de cuestionarios.
  isAdmin() {
    return true;
  }

  // Los que van a responder 
  isRespondent () {
    return true;
  }

  public isMultiOffice(token: string): boolean {
    return false;
  }

  public setToken (token: string) {
    this.cookies.set(this.tokenId, token)
  }

  public getToken() {
    return this.cookies.get(this.tokenId);
  }

}

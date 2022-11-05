import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { UserToLogin } from '../models/UserToLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLogin:boolean;
  private roleAs:string;
  constructor() { 
    this.isLogin = false;
    this.roleAs = '';
    this.login('SADMIN');
    //this.logout();
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
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  public login(value:string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({success: this.isLogin,  role: this.roleAs})
  }

  public isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  public getRole() {
    this.roleAs = localStorage.getItem('ROLE')!;
    return this.roleAs;
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

}

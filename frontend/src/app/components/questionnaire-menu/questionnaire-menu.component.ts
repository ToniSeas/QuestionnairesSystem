import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/util/Role';

@Component({
  selector: 'app-questionnaire-menu',
  templateUrl: './questionnaire-menu.component.html',
  styleUrls: ['./questionnaire-menu.component.css']
})
export class QuestionnaireMenuComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void { }

  public hasCreateAccess(): boolean {
    return this.userService.getRole() === Role.ADMIN
      || this.userService.getRole() === Role.SYS_ADMIN
  }

  public hasSearchAccess(): boolean {
    return this.userService.getRole() === Role.ADMIN
      || this.userService.getRole() === Role.SYS_ADMIN
      || this.userService.getRole() === Role.REVIEWER
  }

}

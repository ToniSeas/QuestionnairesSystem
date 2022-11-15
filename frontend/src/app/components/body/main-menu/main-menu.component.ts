import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/util/Role';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  
  constructor(public userService: UserService) { }

  public ngOnInit(): void {}

  public hasQuestionnaireAccess( ): boolean{
    return this.userService.getRole() === Role.ADMIN
      || this.userService.getRole() === Role.SYS_ADMIN
      || this.userService.getRole() === Role.REVIEWER
  }

  public hasMaintenanceAccess( ): boolean{
      return this.userService.getRole() === Role.SYS_ADMIN
  }

}

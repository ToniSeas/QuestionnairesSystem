import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/Office';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-select-office',
  templateUrl: './select-office.component.html',
  styleUrls: ['./select-office.component.css']
})
export class SelectOfficeComponent implements OnInit {

  public offices: Office[];
  public nameControl: FormControl;
  public officeControl: FormControl;

  constructor(private userService: UserService, private router: Router) {
    this.offices = [];
    this.nameControl = new FormControl("", [Validators.required]);
    this.officeControl = new FormControl("", [Validators.required]);
  }

  ngOnInit() {
    if (this.userService.getUserId() != -1) {
      let userId: number = this.userService.getUserId();
      this.userService.getOfficesByUser(userId).subscribe(
        (responseDTO) => {
          if (responseDTO.id == 1) {
            this.offices = responseDTO.item!;
          }
        });
      this.nameControl.disable();
      this.nameControl.setValue(this.userService.getUserName());
    } else {
      this.router.navigate(["/login"])
    }
  }

  public isValidInputs() {
    return this.officeControl.valid;
  }

  public onSubmit() {
    if (this.isValidInputs()) {
      this.userService.setLoggedIn(true)
      this.router.navigate(["/"])
    }
  }

}

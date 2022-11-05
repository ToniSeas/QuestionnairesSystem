import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private router: Router, private userService: UserService) {
    this.userName = '';
    this.password = '';
  }

  ngOnInit(): void {
    
  }

  onLogin(): void {
    console.log(this.userName)
    console.log(this.password)

    /*if (this.userService.isMultiOffice(this.userService.getToken())) {
      this.router.navigateByUrl("/office");
    } else {
      this.router.navigateByUrl("/");  
    }*/
    
  }

}
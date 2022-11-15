import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() logoImgPath:string = 'assets\\placa-md.png';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  public goToMain() {
    this.router.navigate(['/']);
  }

  public isUserLogged():boolean {
    return this.userService.isLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-menu',
  templateUrl: './maintenance-menu.component.html',
  styleUrls: ['./maintenance-menu.component.css']
})
export class MaintenanceMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  manage() : void {
    console.log("Manage has been clicked!");
  }

}

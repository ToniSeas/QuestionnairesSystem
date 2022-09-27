import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  displayedColumns: string[] = ['title', 'operations'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  
}

export interface PeriodicElement {
  title: string;
  operations: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Categoria 1', operations: 1},
  {title: 'Categoria 2', operations: 1},
  {title: 'Categoria 3', operations: 1},
];
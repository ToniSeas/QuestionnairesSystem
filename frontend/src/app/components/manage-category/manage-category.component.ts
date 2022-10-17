import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  //temporal
  category: Category = new Category({ name: "new Categorý" });

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('nameCategoryQuestion') nameCategoryQuestion: any; // accessing the reference element

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (result: Category[]) => (this.updateCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;
  }

  public getDataSource(): MatTableDataSource<Category> {
    return this.dataSource;
  }
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateCategoryList(categories: Category[]): void {
    this.dataSource = new MatTableDataSource<Category>(categories)
    this.dataSource.paginator = this.paginator;
  }

  public createCategory(nameC: string): void {
    this.categoryService.createCategory(new Category({ name: nameC })).subscribe(
      (categories) => this.updateCategoryList(categories)
    );
  }
  public clearCategory(): void {
    this.categoryService.clearCategory().subscribe(
      (categories: Category[]) => this.updateCategoryList(categories)
    );
  }

  public clearInput(): void {
    this.nameCategoryQuestion.nativeElement.value = ' ';
  }

}
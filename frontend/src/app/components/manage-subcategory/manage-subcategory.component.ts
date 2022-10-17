import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SubCategory } from 'src/app/models/SubCategory';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-manage-subcategory',
  templateUrl: './manage-subcategory.component.html',
  styleUrls: ['./manage-subcategory.component.css']
})
export class ManageSubcategoryComponent implements OnInit {

  //temporal
  subCategory: SubCategory = new SubCategory({ name: "new subCategorý" });

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<SubCategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('nameSubcategoryQuestion') nameCategoryQuestion: any; // accessing the reference element

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.subcategoryService.getSubCategories().subscribe(
      (result: SubCategory[]) => (this.updateSubCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;
  }

  public getDataSource(): MatTableDataSource<SubCategory> {
    return this.dataSource;
  }
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateSubCategoryList(categories: SubCategory[]): void {
    this.dataSource = new MatTableDataSource<SubCategory>(categories)
    this.dataSource.paginator = this.paginator;
  }

  public createSubCategory(nameC: string): void {
    this.subcategoryService.createSubCategory(new SubCategory({ name: nameC })).subscribe(
      (categories) => this.updateSubCategoryList(categories)
    );
  }
  public clearSubCategory(): void {
    this.subcategoryService.clearSubCategory().subscribe(
      (categories: SubCategory[]) => this.updateSubCategoryList(categories)
    );
  }

  public clearInput(): void {
    this.nameCategoryQuestion.nativeElement.value = ' ';
  }


}

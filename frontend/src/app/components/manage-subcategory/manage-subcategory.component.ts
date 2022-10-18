import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { SubCategory } from 'src/app/models/SubCategory';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-manage-subcategory',
  templateUrl: './manage-subcategory.component.html',
  styleUrls: ['./manage-subcategory.component.css']
})
export class ManageSubcategoryComponent implements OnInit {
  
  private createSubCategoryForm!: FormGroup;

  //temporal
  subCategory: SubCategory = new SubCategory({ name: "new subCategorý" });
  category: Category = new Category({ name: "new Category" });
  categoryList: Category[] = [ new Category({id: 1, name: 'A'}),
                              new Category({id: 2, name: 'B'}),
                              new Category({id: 3, name: 'C'}),
                              new Category({id: 4, name: 'D'}),
                              new Category({id: 5, name: 'E'}),
                              new Category({id: 6, name: 'F'})];

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<SubCategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private subcategoryService: SubcategoryService) { }
  public getFormGroup(): FormGroup { return this.createSubCategoryForm; }

  ngOnInit(): void {
    this.subcategoryService.getSubCategories().subscribe(
      (result: SubCategory[]) => (this.updateSubCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;

    this.createSubCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required]),
      subcategoryF: new FormControl("", [Validators.required])
    })

  }

  onSubmit = () => {
    if (this.createSubCategoryForm.invalid) {
      console.log('test')
    } else {
      console.log('válido');
      let name= this.createSubCategoryForm.get('categoryF')?.value;
      console.log(name);
      this.createSubCategory(name);
      this.createSubCategoryForm.reset();
    }
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
    this.createSubCategoryForm.reset();
  }

}

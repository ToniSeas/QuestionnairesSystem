import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  private createCategoryForm!: FormGroup;
  //temporal
  category: Category = new Category({ name: "new Category" });

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('nameCategoryQuestion') nameCategoryQuestion: any; // accessing the reference element


  constructor(private categoryService: CategoryService) { }
  public getFormGroup(): FormGroup { return this.createCategoryForm; }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (result: Category[]) => (this.updateCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;

    this.createCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required])
    })

  }


  onSubmit = () => {
    if (this.createCategoryForm.invalid) {
      console.log('test')
    } else {
      console.log('válido');
      let name= this.createCategoryForm.get('categoryF')?.value;
      console.log(name);
      this.createCategory(name);
      this.createCategoryForm.reset();
    }
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
    this.createCategoryForm.reset();
  }

  public delete(nameC?: String): void{
    console.log(nameC);
  }

    
  public deleteCategory(idC?: number){
    this.categoryService.deleteCategory(idC).subscribe(
      (categories: Category[]) => this.updateCategoryList(categories)
    );
  }

}
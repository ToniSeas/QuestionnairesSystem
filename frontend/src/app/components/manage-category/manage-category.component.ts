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

  //temporal
  category: Category = new Category({ name: "new Categorý" });

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Category>;
  checkoutForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('nameCategoryQuestion') nameCategoryQuestion: any; // accessing the reference element

  private createCategoryForm!: FormGroup;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: ''});
  }
  


  public getFormGroup(): FormGroup { return this.createCategoryForm; }

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

  onSubmit(customerData:string) {
    // Process checkout data here
    this.checkoutForm.reset();
    //this.createCategory(customerData);
    console.warn('Your order has been submitted', customerData);
  }

}